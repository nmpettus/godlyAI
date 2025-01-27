import { AppCard } from "./AppCard";

export const FeaturedApps = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">Featured Applications</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <AppCard
          title="Bible Verse AI"
          description="Discover and explore Bible verses with AI-powered insights and recommendations."
          image="/placeholder.svg"
          gradient="bg-card-purple"
        />
        <AppCard
          title="Christian Chat Assistant"
          description="Get thoughtful answers to your spiritual questions from our AI-powered Christian chatbot."
          image="/placeholder.svg"
          gradient="bg-card-green"
        />
      </div>
    </div>
  );
};