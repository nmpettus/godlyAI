import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-card-purple to-primary-dark opacity-80"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          WebkitAnimation: "gradient 15s ease infinite",
        }}
      />
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
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