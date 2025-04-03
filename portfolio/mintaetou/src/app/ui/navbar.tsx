'use client'
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/app/ui/nav-button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/app/ui/dropdown-menu";
import Link from 'next/link';
import { GlobeAltIcon, PowerIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/dankbank/fonts';
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface NavLink {
    name: string;
    href?: string;
    onClick?: () => void;
}

const links: NavLink[] = [
    { name: 'Login', href:'/login' },
    { name: 'Home', href: '/'},
    { name: 'Resume', href: '/Resume'},
    { name: 'DankBank', href: '/DankBank'},
    { name: 'TPlanet', href: '/T-Planet'},
    { name: 'RaveMap', href: '/RaveMap'},
    { name: 'BountyHunter', href: '/TCG-Bounty-Hunter'}
];

const Navbar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState(links);
  const [hiddenLinks, setHiddenLinks] = useState<NavLink[]>([]);
  const router = useRouter();
  const { user, logout } = useAuth();
  

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateLinks();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleLogInOut = () => {
    if (user){
      logout()
    } else{
      router.push("/login"); // Redirect to login
    }

  };

  const updateLinks = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const linkWidth = 150; // Adjust this value based on actual width of your links
      const moreButtonWidth = 150; // Width of the "More" button (or estimate it based on your button size)
  
      let maxLinks = Math.floor((containerWidth - moreButtonWidth) / linkWidth); // Account for "More" button
  
      // If we're at the point where we need to hide 2 links, adjust maxLinks accordingly
      if (maxLinks === links.length - 1) {
        maxLinks -= 1;
      }
  
      const newVisibleLinks = links.slice(0, maxLinks);
      const newHiddenLinks = links.slice(newVisibleLinks.length);
  
      setVisibleLinks(newVisibleLinks);
      setHiddenLinks(newHiddenLinks);
    }
  };
  
  return (
    <div className="flex h-full flex-col">
      <nav className="flex h-20 items-center justify-between bg-green-700 p-4 w-full overflow-x-hidden">
        
        {/* Left Side: Logo + Name */}
        <div className="flex items-center min-w-[240px] mr-5 md:mr-10">
          <GlobeAltIcon className="h-6 md:h-8 w-6 md:w-8 rotate-[15deg] text-white" />
          <Link
            className={`${lusitana.className} text-3xl text-white pl-2`}
            href="/"
          >
            Tae-Min Kim
          </Link>
        </div>

        {/* Right Side: Navigation */}
        <div className="flex items-center w-full overflow-x-hidden" ref={containerRef}>
          {/* NavLinks (visible on medium screens and above) */}
          <div className="hidden md:flex items-center text-white text-2xl w-full" ref={containerRef}>
          {visibleLinks.map((link, index) => 
              link.name === 'Login' ? (
                user ? (
                  <button key={index} onClick={handleLogInOut} className="hover:underline hover:text-blue-300 hover:cursor-pointer min-w-[50px] mr-20 text-center">
                  Log Out
                </button>
                ) : (
                  <button key={index} onClick={handleLogInOut} className="hover:underline hover:text-blue-300 hover:cursor-pointer min-w-[50px] mr-20 text-center">
                  Log In
                </button>
                )
              ) : (
                <a key={index} href={link.href} className="hover:underline hover:text-blue-300 mr-20 text-left">
                  {link.name}
                </a>
              )
            )}

            {/* "More+" Button only appears if there are at least 2 hidden links */}
            {hiddenLinks.length >= 2 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-white text-2xl min-w-[150px] hover:underline hover:text-blue-300 hover:cursor-pointer">
                    More <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-green-700">
                  {hiddenLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild className="text-2xl text-white hover:text-blue-300 hover:cursor-pointer">
                      <a href={link.href}>{link.name}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown (shows only on small screens) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {hiddenLinks.map((link) => (
            <a key={link.name} href={link.href} className="block p-2 text-white bg-green-700 rounded-md">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
