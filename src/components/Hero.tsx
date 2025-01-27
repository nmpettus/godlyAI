import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-10 animate-fade-in" />
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text">
          AI-Powered Apps
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover innovative applications powered by artificial intelligence,
          designed to enhance your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg rounded-full">
            Explore Apps
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};