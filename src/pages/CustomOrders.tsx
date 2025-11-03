import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload } from "lucide-react";

const customOrderSchema = z.object({
  vision: z.string().min(20, "Please describe your vision in at least 20 characters").max(1000),
  inspirationFile: z.any().optional(),
  fabricPreference: z.string().min(1, "Please select a fabric preference"),
  measurements: z.string().optional(),
  consultationRequested: z.boolean(),
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
});

type CustomOrderForm = z.infer<typeof customOrderSchema>;

const CustomOrders = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CustomOrderForm>({
    resolver: zodResolver(customOrderSchema),
    defaultValues: {
      consultationRequested: false,
    },
  });

  const fabricPreference = watch("fabricPreference");
  const consultationRequested = watch("consultationRequested");

  const onSubmit = (data: CustomOrderForm) => {
    console.log("Custom Order Submitted:", data);
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue("inspirationFile", file);
    }
  };

  const fabrics = [
    { value: "silk", label: "Silk", description: "Luxurious and flowing" },
    { value: "lace", label: "Lace", description: "Delicate and romantic" },
    { value: "velvet", label: "Velvet", description: "Rich and opulent" },
    { value: "tulle", label: "Tulle", description: "Ethereal and dreamy" },
    { value: "satin", label: "Satin", description: "Smooth and elegant" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="animate-fade-in">
              <h1 className="font-cinzel text-5xl md:text-6xl text-primary mb-8 tracking-wide">
                Your Chapter Begins
              </h1>
              <p className="font-inter text-lg text-muted-foreground font-light leading-relaxed mb-12">
                Once your request is received, our designer atelier will reach out to craft your chapter. 
                We look forward to bringing your vision to life with the artistry and devotion that defines BelleVie.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                variant="outline"
                className="font-inter tracking-widest text-sm uppercase"
              >
                Create Another Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-cinzel text-5xl md:text-6xl text-foreground mb-6 tracking-wide">
              Your Dream, Tailored by BelleVie
            </h1>
            <p className="font-inter text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Each bespoke creation is a journey of collaboration, where your vision meets our craftsmanship
            </p>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center items-center gap-4 mb-16">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-cinzel transition-all duration-300 ${
                    currentStep >= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            {/* Step 1: Vision & Inspiration */}
            {currentStep === 1 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-cinzel text-3xl text-foreground mb-3 tracking-wide">
                    Share Your Vision
                  </h2>
                  <p className="font-inter text-muted-foreground font-light">
                    Tell us about the gown that lives in your imagination
                  </p>
                </div>

                <div className="space-y-4">
                  <Label className="font-inter text-sm tracking-wide">Describe Your Dream Gown</Label>
                  <Textarea
                    {...register("vision")}
                    placeholder="Perhaps it's a flowing silk gown reminiscent of old Hollywood glamour, or a modern silhouette with delicate lace details..."
                    className="min-h-[150px] font-inter resize-none"
                  />
                  {errors.vision && (
                    <p className="text-sm text-destructive font-inter">{errors.vision.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <Label className="font-inter text-sm tracking-wide">Upload Inspiration (Optional)</Label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="inspiration-upload"
                    />
                    <label
                      htmlFor="inspiration-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-md cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <span className="font-inter text-sm text-muted-foreground">
                        {fileName || "Click to upload images or sketches"}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />

                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full font-inter tracking-widest text-sm uppercase bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Continue to Fabric Selection
                </Button>
              </div>
            )}

            {/* Step 2: Fabric Preference */}
            {currentStep === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-cinzel text-3xl text-foreground mb-3 tracking-wide">
                    Choose Your Fabric
                  </h2>
                  <p className="font-inter text-muted-foreground font-light">
                    Select the material that will bring your vision to life
                  </p>
                </div>

                <RadioGroup
                  value={fabricPreference}
                  onValueChange={(value) => setValue("fabricPreference", value)}
                  className="space-y-4"
                >
                  {fabrics.map((fabric) => (
                    <div
                      key={fabric.value}
                      className={`border rounded-md p-6 cursor-pointer transition-all duration-300 ${
                        fabricPreference === fabric.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setValue("fabricPreference", fabric.value)}
                    >
                      <div className="flex items-start gap-4">
                        <RadioGroupItem value={fabric.value} id={fabric.value} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={fabric.value} className="font-cinzel text-lg cursor-pointer">
                            {fabric.label}
                          </Label>
                          <p className="font-inter text-sm text-muted-foreground mt-1">
                            {fabric.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                {errors.fabricPreference && (
                  <p className="text-sm text-destructive font-inter">{errors.fabricPreference.message}</p>
                )}

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="flex-1 font-inter tracking-widest text-sm uppercase"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 font-inter tracking-widest text-sm uppercase bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Continue to Details
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Measurements & Contact */}
            {currentStep === 3 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-cinzel text-3xl text-foreground mb-3 tracking-wide">
                    Final Details
                  </h2>
                  <p className="font-inter text-muted-foreground font-light">
                    Share your measurements or request a designer consultation
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label className="font-inter text-sm tracking-wide">Your Name</Label>
                    <Input {...register("name")} placeholder="Enter your full name" className="font-inter" />
                    {errors.name && (
                      <p className="text-sm text-destructive font-inter">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label className="font-inter text-sm tracking-wide">Email Address</Label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="font-inter"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive font-inter">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label className="font-inter text-sm tracking-wide">Phone Number</Label>
                    <Input {...register("phone")} placeholder="+1 (555) 000-0000" className="font-inter" />
                    {errors.phone && (
                      <p className="text-sm text-destructive font-inter">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label className="font-inter text-sm tracking-wide">Measurements (Optional)</Label>
                    <Textarea
                      {...register("measurements")}
                      placeholder="If you have your measurements, please share them here. Otherwise, we'll arrange a consultation."
                      className="min-h-[100px] font-inter resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-border rounded-md">
                    <input
                      type="checkbox"
                      id="consultation"
                      checked={consultationRequested}
                      onChange={(e) => setValue("consultationRequested", e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <Label htmlFor="consultation" className="font-inter text-sm cursor-pointer">
                      Request a designer consultation to discuss your vision in detail
                    </Label>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                    className="flex-1 font-inter tracking-widest text-sm uppercase"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 font-inter tracking-widest text-sm uppercase bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Request
                  </Button>
                </div>
              </div>
            )}
          </form>
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

export default CustomOrders;
