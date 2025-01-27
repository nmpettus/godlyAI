import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export const AppCard = ({ title, description, image, gradient }: AppCardProps) => {
  return (
    <Card className={`p-6 ${gradient} shadow-lg backdrop-blur-sm bg-opacity-90 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="aspect-video rounded-lg mb-4 overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-700 mb-4 min-h-[3rem]">{description}</p>
      <Button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white font-semibold">
        Try Now
      </Button>
    </Card>
  );
};