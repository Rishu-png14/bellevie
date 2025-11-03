import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="font-cinzel text-2xl tracking-wider text-foreground hover:text-primary transition-colors inline-block mb-4"
            >
              BelleVie
            </Link>
            <p className="font-inter text-sm text-muted-foreground">
              Crafting timeless elegance for the chapters of your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg mb-4 text-foreground">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/shop" 
                  className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom-orders" 
                  className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link 
                  to="/atelier-story" 
                  className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-cinzel text-lg mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bellevie" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://pinterest.com/bellevie" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow us on Pinterest"
              >
                <svg 
                  className="w-5 h-5 text-primary" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="font-inter text-sm text-center text-muted-foreground">
            © {currentYear} BelleVie Atelier | Crafted with Elegance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
