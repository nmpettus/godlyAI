import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="h-[800px] px-4 bg-[#E5DEFF]" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Understanding AI</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/95 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-4 text-primary">What AI Is</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• A powerful tool that can process and analyze large amounts of data quickly</li>
              <li>• A system that can recognize patterns and make predictions based on existing data</li>
              <li>• A technology that can assist humans in decision-making and routine tasks</li>
              <li>• A means to automate repetitive processes and enhance efficiency</li>
              <li>• A way to generate creative content based on learned patterns</li>
            </ul>
          </Card>
          
          <Card className="p-6 bg-white/95 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-4 text-primary">What AI Is Not</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Not a replacement for human wisdom, intuition, or spiritual guidance</li>
              <li>• Not capable of true understanding or consciousness</li>
              <li>• Not infallible - it can make mistakes and reflect biases in its training data</li>
              <li>• Not a substitute for human relationships and emotional connections</li>
              <li>• Not able to make moral or ethical judgments on its own</li>
            </ul>
          </Card>
        </div>
        
        <p className="text-primary text-center mt-8 max-w-3xl mx-auto">
          At Technology Ministries, we harness AI as a tool to enhance and support our mission, 
          while maintaining a clear understanding of its role as a supplement to, not a replacement for, 
          human wisdom and spiritual guidance.
        </p>
      </div>
    </section>
  );
};