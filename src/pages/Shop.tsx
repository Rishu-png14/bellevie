import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Crimson Ballgown",
      image: dressGothic1,
      description: "Luxurious gothic couture with black lace bodice and burgundy velvet skirt",
    },
    {
      id: 2,
      name: "Gothic Romance",
      image: dressGothic2,
      description: "Dramatic ballgown featuring intricate lace detailing and rich burgundy tones",
    },
    {
      id: 3,
      name: "Victorian Dream",
      image: dressGothic3,
      description: "Corseted masterpiece with cascading velvet and romantic silhouette",
    },
    {
      id: 4,
      name: "Velvet Elegance",
      image: dressVelvet,
      description: "Sophisticated mermaid gown in deep burgundy velvet with lace appliqué",
    },
    {
      id: 5,
      name: "Enchanted Ballgown",
      image: dressCollection1,
      description: "Opulent burgundy velvet with intricate black lace collar and dramatic train",
    },
    {
      id: 6,
      name: "Regal Majesty",
      image: dressCollection2,
      description: "Corseted beauty with statement lace sleeves and voluminous silk skirt",
    },
    {
      id: 7,
      name: "Midnight Reverie",
      image: dressCollection3,
      description: "Dramatic tiered ballgown in rich burgundy with black lace corset",
    },
    {
      id: 8,
      name: "Noir Sophistication",
      image: dressCollection4,
      description: "Black velvet mermaid gown with intricate lace sleeves and train",
    },
    {
      id: 9,
      name: "Crimson Serenade",
      image: dressCollection5,
      description: "Elegant burgundy satin with dramatic black lace illusion sleeves",
    },
    {
      id: 10,
      name: "Baroque Romance",
      image: dressCollection6,
      description: "Mermaid silhouette in burgundy satin with ornate black lace overlay",
    },
    {
      id: 11,
      name: "Velvet Whisper",
      image: dressCollection7,
      description: "Deep burgundy velvet mermaid with delicate lace bodice detail",
    },
    {
      id: 12,
      name: "Timeless Grace",
      image: dressCollection8,
      description: "Classic burgundy velvet mermaid with romantic lace appliqué",
    },
    {
      id: 13,
      name: "Moonlight Mystique",
      image: dressCollection9,
      description: "Black velvet mermaid with sheer tulle cape and lace bodice",
    },
    {
      id: 14,
      name: "Empress Elegance",
      image: dressCollection10,
      description: "Dramatic burgundy satin with corseted bodice and asymmetrical draping",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="font-cinzel text-5xl md:text-6xl text-foreground mb-6 tracking-wide">
              Couture Inspiration
            </h1>
            <p className="font-inter text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Each design is a glimpse into our artistry. These pieces inspire your custom creation—
              crafted to your vision, fitted to perfection, and made exclusively for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted/20">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl text-foreground tracking-wide">
                    {product.name}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground font-light">
                    {product.description}
                  </p>
                  <Link 
                    to="/custom-orders"
                    className="inline-block w-full mt-4 px-6 py-3 border border-border font-inter tracking-widest text-xs uppercase text-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    Create Your Own
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
