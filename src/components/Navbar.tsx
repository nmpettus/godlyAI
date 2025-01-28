import { Link } from "react-router-dom";
import { Menu, Mail, AppWindow, Book } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChristianCross } from "./icons/ChristianCross";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    // Reset scroll position when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            <p className="text-gray-300 italic text-xs">"Plans fail when there is no counsel,..." Proverbs 15:22</p>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleNavigation("/")} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <ChristianCross className="h-4 w-4" />
                Home
              </button>
              <button onClick={scrollToAbout} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
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
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};