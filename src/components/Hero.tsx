import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark opacity-80 animate-gradient-x"
      />
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute bottom-0 w-full h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            className="animate-[wave_10s_ease-in-out_infinite]"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 w-full h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="0.5" 
            className="animate-[wave_7s_ease-in-out_infinite]"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white [text-shadow:_-1px_1px_2px_rgb(0_0_0),_1px_1px_2px_rgb(0_0_0),_1px_-1px_2px_rgb(0_0_0),_-1px_-1px_2px_rgb(0_0_0)]">
          AI-Powered Apps
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Discover innovative applications powered by artificial intelligence,
          designed to enhance your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-white hover:bg-gray-100 text-primary-dark px-8 py-6 text-lg rounded-full">
            Explore Apps
          </Button>
          <Link to="/contact">
            <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-primary-dark">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};