import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"fade-in" | "fade-out">("fade-in");
  const [showWash, setShowWash] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fade-out");
      setShowWash(true);
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fade-in");
        
        setTimeout(() => {
          setShowWash(false);
        }, 600);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Pink Wash Overlay */}
      {showWash && (
        <div 
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(348, 35%, 80%) 0%, transparent 70%)",
          }}
        >
          <div className="w-full h-full animate-pink-wash" />
        </div>
      )}
      
      {/* Page Content */}
      <div
        className={`${
          transitionStage === "fade-in" ? "animate-page-enter" : "opacity-0"
        }`}
      >
        {displayLocation.pathname === location.pathname ? children : null}
      </div>
    </>
  );
};

export default PageTransition;
