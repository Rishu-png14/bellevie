import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroGown from "@/assets/hero-gown.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroGown} 
            alt="BelleVie Atelier Editorial Gown" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-cinzel text-5xl md:text-7xl mb-6 text-primary tracking-wide leading-tight">
            Where Elegance<br />Becomes a Story
          </h1>
          <p className="font-inter text-lg md:text-xl text-foreground/70 mb-8 font-light tracking-wide max-w-2xl mx-auto">
            Discover timeless couture crafted with artistry and devotion
          </p>
          <Button 
            size="lg" 
            className="font-inter tracking-widest text-sm uppercase bg-secondary text-secondary-foreground hover:bg-secondary/90 px-12 py-6 h-auto"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Brief Brand Introduction */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-cinzel text-4xl text-foreground mb-8 tracking-wide">
            Atelier of Dreams
          </h2>
          <p className="font-inter text-lg text-muted-foreground font-light leading-relaxed">
            Each piece from BelleVie Atelier is a testament to refined craftsmanship and timeless beauty. 
            We create gowns that tell stories, celebrate moments, and transform the art of dressing into an experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
