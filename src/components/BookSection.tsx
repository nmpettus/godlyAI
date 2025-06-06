import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const BookSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-card-yellow to-card-peach">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">Maggie's Children's Book Collection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Book 1: Creation */}
          <Card className="p-6 flex flex-col items-center bg-white/90 backdrop-blur-sm">
            <div className="w-full max-w-[200px] mb-6">
              <img
                src="/lovable-uploads/f44b2cbf-00c1-4495-b369-73a67641c8d8.png"
                alt="Creation as told by Maggie - A Children's Book"
                className="rounded-lg shadow-xl w-full aspect-[3/4] object-contain"
              />
            </div>
            <div className="text-center space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary">Creation as told by Maggie</h3>
              <p className="text-gray-700 flex-grow">
                Join Maggie the Yorkie as she narrates the beautiful story of Creation, making it engaging and understandable for young children.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✨ Perfect for ages 3-6</p>
                <p>📚 Narrated by a lovable Yorkie</p>
                <p>🌟 Teaches the Creation story</p>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white font-semibold mt-auto"
                onClick={() => window.open("https://a.co/d/8LZ0qf4", "_blank")}
              >
                Get it on Amazon
              </Button>
            </div>
          </Card>

          {/* Book 2: Noah's Ark */}
          <Card className="p-6 flex flex-col items-center bg-white/90 backdrop-blur-sm">
            <div className="w-full max-w-[200px] mb-6">
              <img
                src="https://m.media-amazon.com/images/I/71QxGxGxGxL._SY522_.jpg"
                alt="Jonah as told by Maggie - A Children's Book"
                className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="text-center space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary">Jonah as told by Maggie</h3>
              <p className="text-gray-700 flex-grow">
                Join Maggie the Yorkie as she tells the amazing story of Jonah and the whale, bringing this classic biblical tale to life for young readers.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🐋 Underwater adventure story</p>
                <p>📚 Engaging storytelling</p>
                <p>🙏 Teaches about obedience and forgiveness</p>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white font-semibold mt-auto"
                onClick={() => window.open("https://a.co/d/0L2OQLa", "_blank")}
              >
                Get it on Amazon
              </Button>
            </div>
          </Card>

          {/* Book 3: David and Goliath */}
          <Card className="p-6 flex flex-col items-center bg-white/90 backdrop-blur-sm">
            <div className="w-full max-w-[200px] mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="David and Goliath as told by Maggie - A Children's Book"
                className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="text-center space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary">David and Goliath as told by Maggie</h3>
              <p className="text-gray-700 flex-grow">
                Discover the courage of young David through Maggie's eyes in this inspiring tale of faith and bravery.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>⚔️ Story of courage and faith</p>
                <p>📚 Inspiring for young readers</p>
                <p>💪 Teaches about trusting God</p>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white font-semibold mt-auto"
                onClick={() => window.open("https://a.co/d/h3ken2L", "_blank")}
              >
                Get it on Amazon
              </Button>
            </div>
          </Card>
        </div>
        
        <p className="text-primary text-center mt-8 max-w-3xl mx-auto">
          Join Maggie the Yorkie on these wonderful biblical adventures, perfect for bedtime stories and teaching children about faith, courage, and God's love.
        </p>
      </div>
    </div>
  );
};