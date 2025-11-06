import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = "" }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollPercent >= 0 && scrollPercent <= 1) {
        setOffsetY(scrollPercent * 100 * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
