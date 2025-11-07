import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroGown from "@/assets/hero-gown.jpg";
import bellevieLogo from "@/assets/bellevie-logo.png";
import weddingImage from "@/assets/occasion-wedding.jpg";
import eveningImage from "@/assets/occasion-evening-new.jpg";
import redcarpetImage from "@/assets/occasion-redcarpet.jpg";
import coutureImage from "@/assets/occasion-couture.jpg";
import featuredGown from "@/assets/featured-gown.jpg";
import instagram1 from "@/assets/instagram-1.jpg";
import instagramPinkDress from "@/assets/instagram-pink-dress.jpeg";
import instagram3 from "@/assets/instagram-3.jpg";
import instagramGothicDress from "@/assets/instagram-gothic-dress.jpeg";
import instagramBackDress from "@/assets/instagram-back-dress.jpeg";
import instagram6 from "@/assets/instagram-6.jpg";
import instagramHatEditorial from "@/assets/instagram-hat-editorial.jpeg";
import instagram8 from "@/assets/instagram-8.jpg";
import instagramHatProfile from "@/assets/instagram-hat-profile.jpeg";
import fabricSilk from "@/assets/fabric-silk.jpg";
import fabricVelvet from "@/assets/fabric-velvet.jpg";
import fabricLace from "@/assets/fabric-lace.jpg";

const Index = () => {
  const occasions = [
    { title: "Weddings", image: weddingImage },
    { title: "Evenings", image: eveningImage },
    { title: "Red Carpet", image: redcarpetImage },
    { title: "Couture", image: coutureImage },
  ];

  const instagramImages = [
    instagram1,
    instagramPinkDress,
    instagram3,
    instagramGothicDress,
    instagramBackDress,
    instagram6,
    instagramHatEditorial,
    instagram8,
    instagramHatProfile,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Logo Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <img 
            src={bellevieLogo} 
            alt="BelleVie" 
            className="w-48 h-48 mx-auto mb-8 animate-fade-in-slow"
          />
        </div>
      </section>

      {/* Main Hero Section with Full-Width Image */}
      <section className="relative w-full h-[80vh] overflow-hidden animate-fade-in">
        <ParallaxSection speed={0.3}>
          <img 
            src={heroGown} 
            alt="BelleVie Editorial Gown" 
            className="w-full h-full object-cover object-center scale-110"
          />
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent flex items-end justify-center pb-20">
          <div className="text-center px-6">
            <h2 className="font-cinzel text-4xl md:text-6xl text-primary mb-6 tracking-wider">
              Timeless. Poetic. Modern.
            </h2>
            <Button 
              size="lg" 
              className="font-inter tracking-widest text-sm uppercase bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 h-auto"
            >
              Discover the Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-32 px-6">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-cinzel text-4xl md:text-5xl text-foreground mb-12 tracking-wide">
              Our Philosophy
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
              At BelleVie, we believe that fashion transcends fabric and form—it becomes poetry in motion, 
              a story woven into every stitch. We craft not just dresses, but heirlooms of elegance, 
              designed for those who seek beauty that whispers rather than shouts. Each piece is an invitation 
              to celebrate life's most precious moments with grace, sophistication, and timeless allure.
            </p>
            
            {/* Designer Note */}
            <div className="mt-16 pt-12 border-t border-border/30">
              <p className="font-inter text-base md:text-lg text-muted-foreground/90 font-light italic leading-relaxed mb-6">
                "When I founded this atelier, I dreamed of creating gowns that would become part of your story—
                pieces you'd cherish not just for their beauty, but for the memories they hold. Every fabric we select, 
                every seam we finish, carries with it our dedication to making you feel extraordinary. 
                Because true elegance isn't about perfection—it's about authenticity, grace, and the confidence 
                to embrace your own unique beauty."
              </p>
              <p className="font-cinzel text-sm tracking-widest text-foreground/70">
                — BelleVie Atelier
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Cinematic Fabric Close-ups */}
      <section className="py-20">
        <ScrollReveal delay={200}>
          <div className="relative w-full h-[50vh] overflow-hidden">
            <ParallaxSection speed={0.4}>
              <img 
                src={fabricSilk} 
                alt="Silk fabric texture" 
                className="w-full h-full object-cover scale-110"
              />
            </ParallaxSection>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="relative w-full h-[50vh] overflow-hidden mt-20">
            <ParallaxSection speed={0.5}>
              <img 
                src={fabricVelvet} 
                alt="Velvet fabric texture" 
                className="w-full h-full object-cover scale-110"
              />
            </ParallaxSection>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="relative w-full h-[50vh] overflow-hidden mt-20">
            <ParallaxSection speed={0.6}>
              <img 
                src={fabricLace} 
                alt="Lace fabric texture" 
                className="w-full h-full object-cover scale-110"
              />
            </ParallaxSection>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        </ScrollReveal>
      </section>

      {/* Explore by Occasion Grid */}
      <section className="py-20 px-6 bg-muted/20">
        <ScrollReveal>
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-cinzel text-4xl md:text-5xl text-center text-foreground mb-16 tracking-wide">
              Explore by Occasion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {occasions.map((occasion, index) => (
                <ScrollReveal key={occasion.title} delay={index * 100}>
                  <div className="group cursor-pointer overflow-hidden">
                    <div className="aspect-square overflow-hidden mb-4">
                      <img 
                        src={occasion.image} 
                        alt={occasion.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-cinzel text-2xl text-center text-foreground tracking-wide">
                      {occasion.title}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Gown of the Month */}
      <section className="py-32 px-6">
        <ScrollReveal>
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="font-inter text-sm tracking-widest text-primary uppercase mb-4">
                  Featured This Month
                </p>
                <h2 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6 tracking-wide">
                  The Aurora Gown
                </h2>
                <p className="font-inter text-lg text-muted-foreground font-light leading-relaxed mb-8">
                  A masterpiece in champagne silk, the Aurora Gown captures the essence of ethereal beauty. 
                  Hand-embroidered details dance across flowing fabric, creating a silhouette that moves 
                  like liquid light. Perfect for those who seek to make an unforgettable entrance.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-inter tracking-widest text-sm uppercase"
                >
                  View Details
                </Button>
              </div>
              <ParallaxSection speed={0.2} className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={featuredGown} 
                    alt="Aurora Gown - Featured Gown of the Month"
                    className="w-full h-auto"
                  />
                  <p className="font-inter text-sm md:text-base text-muted-foreground/80 italic mt-6 text-center">
                    "Every stitch carries a heartbeat."
                  </p>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Follow BelleVie - Instagram Grid */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-cinzel text-4xl md:text-5xl text-center text-foreground mb-4 tracking-wide">
            Follow BelleVie
          </h2>
          <a 
            href="https://www.instagram.com/bellevienoire" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-inter text-center text-primary hover:text-primary/80 transition-colors mb-12 tracking-wide block"
          >
            @Bellevienoire
          </a>
          <div className="grid grid-cols-3 gap-4">
            {instagramImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden cursor-pointer group"
              >
                <img 
                  src={image} 
                  alt={`BelleVie Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
