import { Link } from "react-router-dom";
import { Menu, Mail, AppWindow, Book, Info, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChristianCross } from "./icons/ChristianCross";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    // Reset scroll position when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    // First navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary/95 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2">
              <ChristianCross className="h-6 w-6 text-white" />
              <span className="text-white font-bold text-xl">GodlyAI.org</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleNavigation("/")} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <ChristianCross className="h-4 w-4" />
                Home
              </button>
              <button onClick={scrollToAbout} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Info className="h-4 w-4" />
                Understanding AI
              </button>
              <button onClick={() => handleNavigation("/apps")} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <AppWindow className="h-4 w-4" />
                Apps
              </button>
              <button onClick={() => handleNavigation("/books")} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Book className="h-4 w-4" />
                Books
              </button>
              <button onClick={() => handleNavigation("/contact")} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-primary sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <button onClick={() => handleNavigation("/")} className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-lg font-medium">
                    <ChristianCross className="h-5 w-5" />
                    Home
                  </button>
                  <button onClick={scrollToAbout} className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-lg font-medium">
                    <Info className="h-5 w-5" />
                    Understanding AI
                  </button>
                  <button onClick={() => handleNavigation("/apps")} className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-lg font-medium">
                    <AppWindow className="h-5 w-5" />
                    Apps
                  </button>
                  <button onClick={() => handleNavigation("/books")} className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-lg font-medium">
                    <Book className="h-5 w-5" />
                    Books
                  </button>
                  <button onClick={() => handleNavigation("/contact")} className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-lg font-medium">
                    <Mail className="h-5 w-5" />
                    Contact
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};