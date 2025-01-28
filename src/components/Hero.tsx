import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/d8a545fc-b16b-4efa-9d31-12a6a42cb009.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white [text-shadow:_-1px_1px_2px_rgb(0_0_0),_1px_1px_2px_rgb(0_0_0),_1px_-1px_2px_rgb(0_0_0),_-1px_-1px_2px_rgb(0_0_0)]">
          AI-Powered Apps
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto [text-shadow:_-1px_1px_2px_rgb(0_0_0),_1px_1px_2px_rgb(0_0_0),_1px_-1px_2px_rgb(0_0_0),_-1px_-1px_2px_rgb(0_0_0)]">
          Discover innovative applications powered by artificial intelligence,
          designed to enhance your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-white hover:bg-gray-100 text-primary-dark px-8 py-6 text-lg rounded-full [text-shadow:_-1px_1px_1px_rgba(0,0,0,0.1)]">
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