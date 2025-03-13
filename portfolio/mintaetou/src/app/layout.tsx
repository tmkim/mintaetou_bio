import '@/app/globals.css';
import { inter } from '@/app/ui/dankbank/fonts';
import { AuthProvider } from "@/context/AuthContext";
import Navbar from '@/app/ui/navbar';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
  <body className={`${inter.className} antialiased`}>
    <AuthProvider>
      <div className="w-full flex-none sticky top-0">
        <Navbar />
      </div>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Suspense>
          <div className="flex-grow">{children}</div>
        </Suspense>
        <footer className="text-center py-6 bg-green-700 text-white">
          <p>&copy; 2025 Tae-Min Kim. All rights reserved.</p>
        </footer>
      </div>
    </AuthProvider>
  </body>
</html>

  );
}
