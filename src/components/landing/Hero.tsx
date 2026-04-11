import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-chw.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-bold text-foreground tracking-tight">
            Compass<span className="text-compass-green-light">CHW</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#for-chws" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">For CHWs</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log In</Button>
            <Button variant="default" size="sm">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-compass-green/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-compass-green animate-pulse" />
              <span className="text-label text-compass-green uppercase">Now in Los Angeles</span>
            </div>

            <h1 className="text-display-lg md:text-display-xl tracking-tight text-foreground">
              Care navigation.{" "}
              <span className="text-gradient-brand">On demand.</span>
            </h1>

            <p className="mt-5 text-body-lg text-muted-foreground max-w-lg">
              Get matched with a trained Community Health Worker in your neighborhood — for housing, food, recovery, mental health, and healthcare. <strong className="text-foreground">At no cost to you.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="ml-1" />
              </Button>
              <Button variant="outline" size="xl">
                Become a CHW
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "HIPAA Compliant" },
                { icon: CheckCircle, label: "Medi-Cal Accepted" },
                { icon: Star, label: "No Cost to Members" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border shadow-card">
                  <Icon className="w-4 h-4 text-compass-green" />
                  <span className="text-body-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Community Health Worker helping a community member navigate healthcare paperwork"
                className="w-full h-auto object-cover aspect-[4/3]"
                width={1280}
                height={854}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-compass-dark/40 via-transparent to-transparent" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-label text-muted-foreground uppercase">Active CHWs</p>
                    <p className="text-display-sm text-foreground">200+</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-label text-muted-foreground uppercase">Communities</p>
                    <p className="text-display-sm text-foreground">LA County</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-label text-muted-foreground uppercase">Cost</p>
                    <p className="text-display-sm text-compass-green">$0</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
