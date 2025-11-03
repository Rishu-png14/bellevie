import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitted(true);
    form.reset();
    
    // Reset confirmation after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-cinzel text-5xl md:text-6xl mb-6 text-foreground">
              Speak with Our Atelier
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Every conversation is the beginning of something beautiful. 
              Share your vision, and we'll bring it to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-lg mb-16 animate-fade-in">
            {!isSubmitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-foreground">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="border-primary/20 focus:border-primary transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="border-primary/20 focus:border-primary transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-foreground">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your vision, occasion, or any questions..." 
                            className="min-h-[150px] border-primary/20 focus:border-primary transition-colors resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter tracking-wide transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-cinzel text-2xl mb-4 text-foreground">
                  Thank You
                </h3>
                <p className="font-inter text-muted-foreground max-w-md mx-auto">
                  Your words are the beginning of a new story. We'll reach out soon.
                </p>
              </div>
            )}
          </div>

          {/* Studio Information */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {/* Address */}
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-8 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-cinzel text-xl mb-3 text-foreground">Visit Our Atelier</h3>
              <p className="font-inter text-muted-foreground">
                123 Rue de la Mode<br />
                Paris, France 75001<br />
                By appointment only
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-8 text-center">
              <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-cinzel text-xl mb-3 text-foreground">Follow Our Journey</h3>
              <div className="space-y-2">
                <a 
                  href="https://instagram.com/bellevie" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-inter text-muted-foreground hover:text-primary transition-colors"
                >
                  @bellevie
                </a>
                <a 
                  href="https://pinterest.com/bellevie" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-inter text-muted-foreground hover:text-primary transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
