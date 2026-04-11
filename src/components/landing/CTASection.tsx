import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood.jpg";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={neighborhoodImage}
          alt="Los Angeles neighborhood aerial view"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-compass-dark/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-label text-compass-green-light uppercase tracking-wider mb-3">Limited Early Access</p>
          <h2 className="text-display-md md:text-display-lg text-primary-foreground mb-5">
            Don't miss the launch
          </h2>
          <p className="text-body-lg text-primary-foreground/70 mb-8">
            We're opening Compass to early users in Los Angeles first. Secure your spot and be the first to experience care navigation, on demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl">
              Join Waitlist
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
