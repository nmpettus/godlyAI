import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const BookSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-card-yellow to-card-peach">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">Featured Children's Book</h2>
        <Card className="p-8 flex flex-col md:flex-row gap-8 items-center bg-white/90 backdrop-blur-sm">
          <div className="w-full md:w-1/3">
            <img
              src="/lovable-uploads/f44b2cbf-00c1-4495-b369-73a67641c8d8.png"
              alt="In the Beginning - A Children's Book About Creation"
              className="rounded-lg shadow-xl w-full aspect-[3/4] object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-3xl font-bold text-primary">Creation as told by Maggie - A Children's Book</h3>
            <p className="text-lg text-gray-700">
              Join Maggie the Yorkie as she narrates the beautiful story of Creation, making it engaging and understandable for young children.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                ✨ Perfect for ages 3-6
              </p>
              <p className="text-gray-600">
                📚 Narrated by a lovable Yorkie named Maggie
              </p>
              <p className="text-gray-600">
                🌟 Teaches the Creation story in a child-friendly way
              </p>
            </div>
            <Button 
              className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white font-semibold"
              onClick={() => window.open("https://a.co/d/8LZ0qf4", "_blank")}
            >
              Get it on Amazon
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};