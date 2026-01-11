import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import dressGrayCorseted from "@/assets/dress-gray-corseted-lace.jpg";
import dressWhiteTiered from "@/assets/dress-white-tiered-ballgown.jpg";
import dressBurgundyLaceTrain from "@/assets/dress-burgundy-lace-train.jpg";
import dressBurgundyHighneck from "@/assets/dress-burgundy-highneck.jpg";
import dressBurgundyVelvetBallgown from "@/assets/dress-burgundy-velvet-ballgown.jpg";
// New dress imports
import dressNoirSilhouette from "@/assets/dress-noir-silhouette.jpg";
import dressLaceMinuet from "@/assets/dress-lace-minuet.jpg";
import dressMidnightLacePearl from "@/assets/dress-midnight-lace-pearl.jpg";
import dressNoirLaceGloves from "@/assets/dress-noir-lace-gloves.jpg";
import dressNoirLaceCascade from "@/assets/dress-noir-lace-cascade.jpg";
import dressNoirLaceDrama from "@/assets/dress-noir-lace-drama.jpg";
import dressNoirKeyhouleTrain from "@/assets/dress-noir-keyhole-train.jpg";
import dressBridalLaceVeil from "@/assets/dress-bridal-lace-veil.jpg";

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
        {
          id: 19,
          name: "Silk Enchantment",
          image: dressBurgundyHighneck,
          description: "High-neck burgundy silk with delicate lace illusion and statuesque silhouette",
        },
        {
          id: 24,
          name: "Midnight Lace Dream",
          image: dressMidnightLacePearl,
          description: "Sheer black lace halter gown with pearl belt accent and dramatic train",
        },
        {
          id: 25,
          name: "Noir Lace Cascade",
          image: dressNoirLaceDrama,
          description: "Flowing black lace gown with dramatic cape sleeves and ethereal movement",
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
        {
          id: 20,
          name: "Silver Garden",
          image: dressGrayCorseted,
          description: "Charcoal silk with pearl halter neckline and hand-embroidered floral lace",
        },
        {
          id: 21,
          name: "Velvet Kingdom",
          image: dressBurgundyVelvetBallgown,
          description: "Majestic burgundy velvet ballgown with corseted bodice and cascading gathered skirt",
        },
        {
          id: 26,
          name: "Noir Silhouette",
          image: dressNoirSilhouette,
          description: "Sleek black bodysuit with sculpted silhouette, a study in modern minimalism",
        },
        {
          id: 27,
          name: "Lace Minuet",
          image: dressLaceMinuet,
          description: "Black lace corset mini with puffed tulle skirt and romantic white bow detail",
        },
        {
          id: 28,
          name: "Noir Lace Elegance",
          image: dressNoirLaceGloves,
          description: "High-neck black lace mermaid with matching opera gloves and flowing train",
        },
        {
          id: 29,
          name: "Midnight Cascade",
          image: dressNoirLaceCascade,
          description: "Rose-tinted noir lace gown with halter neck and dramatic flowing lace sleeves",
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
        {
          id: 22,
          name: "Cloud Waltz",
          image: dressWhiteTiered,
          description: "Ivory organza ballgown with corseted bodice and cascading ruffled tiers",
        },
        {
          id: 30,
          name: "Lace Reverie",
          image: dressBridalLaceVeil,
          description: "Romantic ivory lace mermaid gown with bishop sleeves and cathedral veil",
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
        {
          id: 23,
          name: "The Sovereign",
          image: dressBurgundyLaceTrain,
          description: "Burgundy mermaid gown with black lace illusion, dramatic train, and regal presence",
        },
        {
          id: 31,
          name: "Noir Keyhole Majesty",
          image: dressNoirKeyhouleTrain,
          description: "Black lace halter gown with keyhole neckline, pearl accent and sweeping train",
        },
      ],
    },
  ];

  // Create refs for each category's carousel
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollCarousel = (index: number, direction: 'left' | 'right') => {
    const carousel = carouselRefs.current[index];
    if (carousel) {
      const scrollAmount = carousel.clientWidth * 0.8;
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
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
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-24">
            <div className="container mx-auto max-w-7xl px-6">
              <ScrollReveal delay={categoryIndex * 100}>
                <div className="mb-8 relative">
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
            </div>

            {/* Horizontal Carousel */}
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={() => scrollCarousel(categoryIndex, 'left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scrollCarousel(categoryIndex, 'right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>

              {/* Carousel Container */}
              <div
                ref={(el) => (carouselRefs.current[categoryIndex] = el)}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 md:px-12 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.dresses.map((dress, index) => (
                  <div 
                    key={dress.id} 
                    className="group/card cursor-pointer flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px]"
                  >
                    <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted/20 relative">
                      <img 
                        src={dress.image}
                        alt={dress.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-105 group-hover/card:brightness-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover/card:bg-primary/5 transition-all duration-700" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-cinzel text-xl text-foreground tracking-wide group-hover/card:text-primary transition-colors duration-300">
                        {dress.name}
                      </h3>
                      <p className="font-inter text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
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
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
