import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Journal = () => {
  const articles = [
    {
      title: "The Art of Bespoke Couture",
      date: "March 15, 2025",
      author: "By Éloise Martin, Head of Design",
      excerpt: "Discover the meticulous craftsmanship that goes into every custom gown, from the first sketch to the final stitch.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea2f5450?w=800&auto=format&fit=crop",
    },
    {
      title: "Timeless Elegance: A Modern Interpretation",
      date: "February 28, 2025",
      author: "By Sophie Rousseau, Creative Director",
      excerpt: "How we blend classic silhouettes with contemporary design to create gowns that transcend time.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop",
    },
    {
      title: "Behind the Atelier: Our Creative Process",
      date: "February 12, 2025",
      author: "By Claire Beaumont, Master Seamstress",
      excerpt: "Step inside our studio and witness the journey from inspiration to masterpiece.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-cinzel text-5xl md:text-6xl mb-6 text-foreground">
              The BelleVie Journal
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories of craftsmanship, inspiration, and the art of timeless elegance
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-muted/20 rounded-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-inter text-sm text-primary tracking-wide">
                    {article.date}
                  </p>
                  <p className="font-inter text-xs text-muted-foreground/70 tracking-wide">
                    {article.author}
                  </p>
                  <h2 className="font-cinzel text-2xl text-foreground tracking-wide group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-inter text-muted-foreground font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-block font-inter text-sm text-primary hover:text-primary/80 transition-colors">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-20 py-16 border-t border-border">
            <p className="font-inter text-lg text-muted-foreground font-light">
              More stories coming soon. Follow us on Instagram to stay updated.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
