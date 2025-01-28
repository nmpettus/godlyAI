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
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
              alt="Children's Book Cover"
              className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-3xl font-bold text-primary">The Adventures of Lovable AI</h3>
            <p className="text-lg text-gray-700">
              Join us on an exciting journey through the world of artificial intelligence, where children learn about technology, ethics, and friendship in a fun and engaging way.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                ✨ Perfect for ages 6-12
              </p>
              <p className="text-gray-600">
                📚 Educational and entertaining
              </p>
              <p className="text-gray-600">
                🌟 Beautifully illustrated
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