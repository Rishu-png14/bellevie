import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import atelierWorkspace from "@/assets/atelier-workspace.jpg";
import atelierStudio from "@/assets/atelier-studio.jpg";

const AtelierStory = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-cinzel text-6xl md:text-7xl text-foreground mb-8 tracking-wide animate-fade-in-slow">
            The House of BelleVie
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-12 animate-fade-in" />
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 animate-fade-in">
            <h2 className="font-cinzel text-4xl text-foreground tracking-wide">
              Born from the Dream of Timeless Elegance
            </h2>
            <div className="space-y-6 font-inter text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                BelleVie began not as a brand, but as a quiet rebellion against the ephemeral nature of modern fashion. 
                In a world of fleeting trends and disposable beauty, we sought to create something enduring—gowns that 
                would become heirlooms, designs that would transcend seasons, and moments that would be remembered forever.
              </p>
              <p>
                Our atelier was founded on a singular belief: that true luxury is not found in excess, but in the 
                meticulous artistry of creation. Each stitch tells a story. Each fabric whispers a secret. Every gown 
                we craft is an ode to the woman who will wear it, a celebration of her unique journey, and a testament 
                to the timeless elegance that lives within her.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[70vh] overflow-hidden my-20">
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%]"
          style={{ willChange: "transform" }}
        >
          <img 
            src={atelierWorkspace}
            alt="BelleVie Atelier Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end justify-center pb-16">
          <p className="font-cinzel text-3xl text-primary tracking-wider text-center px-6">
            Where artistry meets devotion
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 animate-fade-in">
            <h2 className="font-cinzel text-4xl text-foreground tracking-wide">
              We Design Not for Trends, But for Chapters of Your Life
            </h2>
            <div className="space-y-6 font-inter text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                A wedding day. An anniversary. A milestone celebration. A moment of personal triumph. These are not 
                occasions that deserve anything ordinary. They are chapters in your story that deserve to be adorned 
                with beauty that resonates with your soul.
              </p>
              <p>
                At BelleVie, we do not chase what is fashionable today. We create what will be cherished tomorrow, 
                and treasured for generations. Our gowns are designed with the understanding that true elegance never 
                fades, that sophistication is eternal, and that the most beautiful thing a woman can wear is confidence 
                wrapped in artistry.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 italic text-primary font-normal">
                "Fashion fades, but style is eternal. At BelleVie, we craft the latter."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <img 
            src={atelierStudio}
            alt="BelleVie Design Studio"
            className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-background border border-primary/30 p-12 md:p-16 rounded-lg animate-fade-in">
            <div className="text-center mb-8">
              <p className="font-inter text-sm tracking-widest uppercase text-primary mb-2">
                A Note from the Founder
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
            
            <div className="space-y-6 font-inter text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                When I first envisioned BelleVie, I dreamed of creating more than beautiful garments. I wanted to build 
                a sanctuary where women could discover the gown that already existed in their hearts—the one they had 
                imagined for years, or perhaps never knew they needed until the moment they saw it.
              </p>
              <p>
                Every woman who walks through our doors brings with her a story. A dream. A vision of herself at her 
                most radiant. It is my deepest honor to help bring that vision to life, to translate emotions into silk 
                and lace, to transform moments into memories that will last forever.
              </p>
              <p>
                BelleVie is not just a fashion house. It is a promise—that you will be seen, heard, and celebrated. 
                That your moment will be as extraordinary as you are. That your gown will be a masterpiece worthy of 
                the woman wearing it.
              </p>
              <p className="italic text-primary font-normal">
                Thank you for allowing us to be part of your story.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="font-cinzel text-2xl text-foreground tracking-wide">
                With devotion and artistry,
              </p>
              <p className="font-cinzel text-3xl text-primary mt-2 tracking-wide">
                The BelleVie Atelier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="font-cinzel text-3xl md:text-4xl text-primary tracking-wide leading-relaxed animate-fade-in">
            "Where elegance becomes a story, and every story deserves a masterpiece."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-cinzel text-2xl text-foreground mb-4 tracking-wider">
            BelleVie
          </p>
          <p className="font-inter text-sm text-muted-foreground tracking-wide mb-6">
            Where Elegance Becomes a Story
          </p>
          <a 
            href="https://www.instagram.com/bellevienoire" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-inter text-sm tracking-wide"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @Bellevienoire
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AtelierStory;
