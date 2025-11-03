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

export default Shop;
