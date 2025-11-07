import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import dressGothic1 from "@/assets/dress-gothic-1.jpg";
import dressGothic2 from "@/assets/dress-gothic-2.jpg";
import dressGothic3 from "@/assets/dress-gothic-3.jpg";
import dressVelvet from "@/assets/dress-velvet-elegance.png";
import dressCollection1 from "@/assets/dress-collection-1.jpg";
import dressCollection2 from "@/assets/dress-collection-2.jpg";
import dressCollection3 from "@/assets/dress-collection-3.jpg";
import dressCollection4 from "@/assets/dress-collection-4.jpg";
import dressCollection5 from "@/assets/dress-collection-5.jpg";
import dressCollection6 from "@/assets/dress-collection-6.jpg";
import dressCollection7 from "@/assets/dress-collection-7.jpg";
import dressCollection8 from "@/assets/dress-collection-8.jpg";
import dressCollection9 from "@/assets/dress-collection-9.jpg";
import dressCollection10 from "@/assets/dress-collection-10.jpg";
import featuredGown from "@/assets/featured-gown.jpg";
import occasionWedding from "@/assets/occasion-wedding.jpg";
import occasionEvening from "@/assets/occasion-evening-new.jpg";
import occasionRedcarpet from "@/assets/occasion-redcarpet.jpg";

const Shop = () => {
  const categories = [
    {
      title: "Evening Gowns",
      description: "Timeless elegance for unforgettable evenings",
      dresses: [
        {
          id: 1,
          name: "The Midnight Whisper",
          image: dressCollection4,
          description: "Black velvet mermaid silhouette with intricate lace sleeves, trailing like moonlight on water",
        },
        {
          id: 2,
          name: "Crimson Reverie",
          image: dressCollection1,
          description: "Opulent burgundy velvet with dramatic black lace collar and cathedral train",
        },
        {
          id: 3,
          name: "Velvet Sonata",
          image: dressVelvet,
          description: "Deep burgundy mermaid gown with delicate lace appliqué, a symphony in fabric",
        },
        {
          id: 4,
          name: "Baroque Twilight",
          image: dressCollection6,
          description: "Mermaid silhouette in burgundy satin with ornate black lace overlay",
        },
        {
          id: 5,
          name: "The Ethereal Gown",
          image: occasionEvening,
          description: "Luminous white silk with celestial draping and crystal embellishments",
        },
      ],
    },
    {
      title: "Couture Collection",
      description: "Statement pieces that define luxury",
      dresses: [
        {
          id: 6,
          name: "Victorian Majesty",
          image: dressGothic3,
          description: "Corseted masterpiece with cascading velvet and romantic Victorian silhouette",
        },
        {
          id: 8,
          name: "Empress of Shadows",
          image: dressGothic2,
          description: "Regal black gown with structured corsetry and cascading silk layers",
        },
        {
          id: 9,
          name: "Moonlight Mystique",
          image: dressCollection9,
          description: "Black velvet mermaid with sheer tulle cape and delicate lace bodice",
        },
        {
          id: 10,
          name: "Scarlet Empress",
          image: dressCollection10,
          description: "Dramatic burgundy satin with corseted bodice and asymmetrical draping",
        },
      ],
    },
    {
      title: "Bridal & Engagement Wear",
      description: "Romance woven into every stitch",
      dresses: [
        {
          id: 11,
          name: "The Eternal Promise",
          image: occasionWedding,
          description: "Ivory silk with hand-embroidered lace and flowing cathedral train",
        },
      ],
    },
    {
      title: "Red Carpet Collection",
      description: "Designs that command attention",
      dresses: [
        {
          id: 13,
          name: "Regal Sophistication",
          image: dressCollection2,
          description: "Corseted beauty with statement lace sleeves and voluminous silk skirt",
        },
        {
          id: 14,
          name: "Burgundy Ballad",
          image: dressCollection3,
          description: "Dramatic tiered ballgown in rich burgundy with black lace corset",
        },
        {
          id: 15,
          name: "Noir Elegance",
          image: dressCollection5,
          description: "Elegant burgundy satin with dramatic black lace illusion sleeves",
        },
        {
          id: 16,
          name: "Velvet Poetry",
          image: dressCollection7,
          description: "Deep burgundy velvet mermaid with delicate lace bodice detail",
        },
        {
          id: 17,
          name: "Timeless Grace",
          image: dressCollection8,
          description: "Classic burgundy velvet mermaid with romantic lace appliqué",
        },
        {
          id: 18,
          name: "Scarlet Serenade",
          image: occasionRedcarpet,
          description: "Bold red silk with daring silhouette and modern sophistication",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="font-cinzel text-5xl md:text-6xl text-foreground mb-6 tracking-wide">
                Couture Collections
              </h1>
              <p className="font-inter text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Each design is a glimpse into our artistry. These pieces inspire your custom creation—
                crafted to your vision, fitted to perfection, and made exclusively for you.
              </p>
            </div>
          </ScrollReveal>

          {categories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-24">
              <ScrollReveal delay={categoryIndex * 100}>
                <div className="mb-12 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 transform -skew-y-1" />
                  <div className="relative py-8 px-6 text-center">
                    <h2 className="font-cinzel text-3xl md:text-4xl text-foreground mb-3 tracking-wide">
                      {category.title}
                    </h2>
                    <p className="font-inter text-base text-muted-foreground font-light italic">
                      {category.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.dresses.map((dress, index) => (
                  <ScrollReveal key={dress.id} delay={index * 50}>
                    <div className="group cursor-pointer">
                      <ParallaxSection speed={0.1 * (index % 3)}>
                        <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted/20 relative">
                          <img 
                            src={dress.image}
                            alt={dress.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-700" />
                        </div>
                      </ParallaxSection>
                      <div className="space-y-2">
                        <h3 className="font-cinzel text-xl text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                          {dress.name}
                        </h3>
                        <p className="font-inter text-sm text-muted-foreground font-light leading-relaxed">
                          {dress.description}
                        </p>
                        <Link 
                          to="/custom-orders"
                          className="inline-block w-full mt-4 px-6 py-3 border border-border font-inter tracking-widest text-xs uppercase text-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ease-in-out-quint"
                        >
                          Create Your Own
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
