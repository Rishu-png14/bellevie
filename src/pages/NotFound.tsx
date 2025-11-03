import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-2xl">
          <h1 className="font-cinzel text-6xl md:text-8xl text-primary mb-6 tracking-wide">
            404
          </h1>
          <h2 className="font-cinzel text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
            Page Not Found
          </h2>
          <p className="font-inter text-lg text-muted-foreground font-light mb-8">
            It seems this chapter doesn't exist in our story. Let us guide you back to something beautiful.
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="font-inter tracking-widest text-sm uppercase"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
