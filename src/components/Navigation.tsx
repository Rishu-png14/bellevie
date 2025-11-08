import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Custom Orders", path: "/custom-orders" },
    { name: "Atelier Story", path: "/atelier-story" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-cinzel text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            BelleVie
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden pt-6 pb-2 space-y-4 animate-fade-in">
            <li>
              <Link
                to="/"
                className="block font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            
            {/* Discover the Collection - Mobile Only */}
            <li>
              <button
                onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                className="w-full flex items-center justify-between font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Discover the Collection
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${isDiscoverOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isDiscoverOpen && (
                <ul className="ml-4 mt-2 space-y-2 animate-fade-in">
                  <li>
                    <Link
                      to="/shop"
                      className="block font-inter text-sm tracking-wide text-foreground/60 hover:text-primary transition-colors py-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDiscoverOpen(false);
                      }}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/custom-orders"
                      className="block font-inter text-sm tracking-wide text-foreground/60 hover:text-primary transition-colors py-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDiscoverOpen(false);
                      }}
                    >
                      Custom Orders
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/atelier-story"
                className="block font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Atelier Story
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className="block font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block font-inter text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
