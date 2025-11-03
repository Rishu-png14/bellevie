import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import dressGothic1 from "@/assets/dress-gothic-1.jpg";
import dressGothic2 from "@/assets/dress-gothic-2.jpg";
import dressGothic3 from "@/assets/dress-gothic-3.jpg";
import dressVelvet from "@/assets/dress-velvet-elegance.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Crimson Ballgown",
      price: "$4,500",
      image: dressGothic1,
      description: "Luxurious gothic couture with black lace bodice and burgundy velvet skirt",
    },
    {
      id: 2,
      name: "Gothic Romance",
      price: "$4,200",
      image: dressGothic2,
      description: "Dramatic ballgown featuring intricate lace detailing and rich burgundy tones",
    },
    {
      id: 3,
      name: "Victorian Dream",
      price: "$4,800",
      image: dressGothic3,
      description: "Corseted masterpiece with cascading velvet and romantic silhouette",
    },
    {
      id: 4,
      name: "Velvet Elegance",
      price: "$3,900",
      image: dressVelvet,
      description: "Sophisticated mermaid gown in deep burgundy velvet with lace appliqué",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="font-cinzel text-5xl md:text-6xl text-foreground mb-6 tracking-wide">
              The Collection
            </h1>
            <p className="font-inter text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Each gown is a work of art, meticulously crafted to embody timeless elegance and unparalleled sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="font-inter text-lg text-primary font-light tracking-wide">
                    {product.price}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full mt-4 font-inter tracking-widest text-xs uppercase"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-cinzel text-2xl text-foreground mb-4 tracking-wider">
            BelleVie
          </p>
          <p className="font-inter text-sm text-muted-foreground tracking-wide">
            Where Elegance Becomes a Story
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
