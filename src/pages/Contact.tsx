import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-card-purple to-card-pink animate-gradient-x">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-up">Contact Us</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl animate-fade-up">
          {!isActivated ? (
            <form 
              action="https://formsubmit.co/norm@technologyministries.org" 
              method="POST" 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setIsActivated(true);
                toast({
                  title: "Activation email sent!",
                  description: "Please check your email to activate the form.",
                });
              }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email (for form activation)
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white"
              >
                Activate Form
              </Button>
            </form>
          ) : (
            <form 
              action="https://formsubmit.co/norm@technologyministries.org" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" name="name" required className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" required className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" required className="w-full min-h-[150px]" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;