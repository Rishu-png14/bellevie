import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import fabricSilk from "@/assets/fabric-silk.jpg";
import fabricVelvet from "@/assets/fabric-velvet.jpg";
import fabricLace from "@/assets/fabric-lace.jpg";
import fabricSatin from "@/assets/fabric-satin.jpg";
import fabricOrganza from "@/assets/fabric-organza.jpg";
import fabricChiffon from "@/assets/fabric-chiffon.jpg";

interface Fabric {
  name: string;
  image: string;
  description: string;
  value: string;
}

const fabrics: Fabric[] = [
  {
    name: "Silk",
    image: fabricSilk,
    value: "silk",
    description: "Timeless as a lover's promise. Silk moves with you like water, catching light in whispers. It holds your body's warmth and carries elegance without effort—a fabric that speaks in sighs.",
  },
  {
    name: "Velvet",
    image: fabricVelvet,
    value: "velvet",
    description: "Rich as night, deep as memory. Velvet is luxury you can feel—soft under your fingertips, bold in its presence. It demands attention while cradling you in comfort, like royalty wrapped in twilight.",
  },
  {
    name: "Lace",
    image: fabricLace,
    value: "lace",
    description: "Delicate as a secret, intricate as devotion. Lace is romance made tangible—woven by hand, stitched with care. It reveals and conceals in harmony, a love letter traced in thread.",
  },
  {
    name: "Satin",
    image: fabricSatin,
    value: "satin",
    description: "Smooth as moonlight on still water. Satin glides over skin with an almost liquid grace, reflecting light in gentle waves. It's elegance distilled—pure, polished, and endlessly refined.",
  },
  {
    name: "Organza",
    image: fabricOrganza,
    value: "organza",
    description: "Light as breath, ethereal as morning mist. Organza floats and dances, creating volume without weight. It's the fabric of dreams—sheer, delicate, and impossibly romantic.",
  },
  {
    name: "Chiffon",
    image: fabricChiffon,
    value: "chiffon",
    description: "Soft as a whisper, flowing like poetry. Chiffon drapes with effortless grace, moving as you move. It's femininity captured in fabric—gentle, dreamy, and timelessly beautiful.",
  },
];

interface FabricSelectorProps {
  onSelect?: (fabricValue: string) => void;
}

const FabricSelector = ({ onSelect }: FabricSelectorProps) => {
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  const handleFabricClick = (fabric: Fabric) => {
    setSelectedFabric(fabric);
    onSelect?.(fabric.value);
  };

  return (
    <>
      <div className="w-full overflow-hidden py-12">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl md:text-5xl text-foreground mb-4 tracking-wide">
            The Essence of Fabric
          </h2>
          <p className="font-inter text-muted-foreground font-light max-w-2xl mx-auto px-6">
            Each fabric tells its own story. Touch, feel, discover the material that speaks to your soul.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 px-6 md:px-12 pb-8">
              {fabrics.map((fabric) => (
                <div
                  key={fabric.value}
                  onClick={() => handleFabricClick(fabric)}
                  className="flex-shrink-0 w-72 group cursor-pointer"
                >
                  {/* Fabric Image with Ripple Effect */}
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-muted/20">
                    <img
                      src={fabric.image}
                      alt={`${fabric.name} fabric texture`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Blush Glow Overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-700" />
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-primary/30 group-hover:animate-[ripple_1.2s_cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                  </div>

                  {/* Fabric Name */}
                  <h3 className="font-cinzel text-2xl text-foreground tracking-wide text-center group-hover:text-primary transition-colors duration-500">
                    {fabric.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Fabric Description Dialog */}
      <Dialog open={!!selectedFabric} onOpenChange={() => setSelectedFabric(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-cinzel text-3xl text-center tracking-wide">
              {selectedFabric?.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={selectedFabric?.image}
                alt={`${selectedFabric?.name} fabric`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="font-inter text-muted-foreground font-light leading-relaxed text-center italic px-6">
              {selectedFabric?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FabricSelector;
