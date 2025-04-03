'use client'
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  // Add any other fields you expect from the user endpoint
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  
  // Fetch user session on mount
  useEffect(() => {
    fetchUser();
  }, []);

  const getCSRFToken = async () => {
    await fetch(apiUrl + "csrf/", {
        credentials: "include",
    });
};

  const fetchUser = async () => {
    try {
      await getCSRFToken(); 

      const res = await fetch(authUrl + "user/", {
        credentials: "include",
      });

      if (res.status === 403) {
        console.warn("User not authenticated");
        setUser(null); // Ensure UI updates correctly
        return;
      }

      if (res.ok) {
        const data = await res.json();
        setUser(data);
        console.log(data);
      } else {
        setUser(null);
      }

    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    await getCSRFToken(); 

    const res = await fetch(authUrl + "login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Login failed");
    } else{
      await fetchUser(); // Refresh user state after login
      router.push("/redirect");
    }
  };

  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
          return decodeURIComponent(value);
    }}
    return "";
  };
  

  const logout = async () => {
    const res = await fetch(authUrl + "logout/", {
        method: "POST",
        headers: {        
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"), // Include CSRF token
        },
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Logout failed");
    } else{
      setUser(null);
      router.push("/redirect");  
    }

};


  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};