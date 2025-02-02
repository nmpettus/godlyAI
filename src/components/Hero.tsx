import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/d8a545fc-b16b-4efa-9d31-12a6a42cb009.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />
      <div className="relative z-10 text-center px-4 animate-fade-up pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white [text-shadow:_-1px_1px_2px_rgb(0_0_0),_1px_1px_2px_rgb(0_0_0),_1px_-1px_2px_rgb(0_0_0),_-1px_-1px_2px_rgb(0_0_0)]">
          AI-Powered Apps
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto [text-shadow:_-1px_1px_2px_rgb(0_0_0),_1px_1px_2px_rgb(0_0_0),_1px_-1px_2px_rgb(0_0_0),_-1px_-1px_2px_rgb(0_0_0)]">
          Discover innovative applications powered by artificial intelligence,
          designed to enhance your spiritual journey.
        </p>
        <p className="text-base md:text-lg text-black mt-8 mb-8 max-w-xl mx-auto italic px-4 md:px-3 font-bold bg-white/80 py-2 rounded-lg inline-block">
          "Let us be wise as serpents, yet harmless as doves, embracing AI not as a replacement, but as a tool for good in the hands of the faithful."
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center px-8 md:px-0">
          <Button 
            className="bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] text-black w-full md:w-[160px] h-[60px] text-lg rounded-full font-medium hover:opacity-90 border-2 border-black"
            onClick={() => navigate('/apps')}
          >
            Explore Apps
          </Button>
          <Button 
            variant="outline" 
            className="bg-gradient-to-r from-[#e6e9f0] to-[#eef1f5] w-full md:w-[160px] h-[60px] text-lg rounded-full border-2 border-black text-black hover:opacity-90"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};