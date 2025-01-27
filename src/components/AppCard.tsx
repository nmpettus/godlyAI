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
    <Card className={`p-6 ${gradient} backdrop-blur-sm bg-opacity-50 transform transition-all duration-300 hover:scale-105`}>
      <div className="aspect-video rounded-lg mb-4 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white">
        Try Now
      </Button>
    </Card>
  );
};