import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, DollarSign, Heart, Users, Clock } from "lucide-react";
import heroChwImage from "@/assets/hero-chw-toggle.jpg";
import heroMemberImage from "@/assets/hero-member.jpg";
import compassIcon from "@/assets/compass-icon.png";

type ViewMode = "chw" | "member";

const viewData = {
  chw: {
    image: heroChwImage,
    imageAlt: "Community Health Worker helping an elderly person with paperwork",
    headline: <>Your CHW career,{" "}<span className="text-secondary">on your terms.</span></>,
    description: <>Compass connects <strong className="text-foreground">Community Health Workers</strong> with residents who need help navigating housing, food, recovery, and healthcare — and <strong className="text-foreground">pays you for your service</strong> through Medi-Cal.</>,
    cta: { label: "Start Earning as a CHW", route: "/auth" },
    secondaryCta: { label: "I Need Help" },
    stats: [
      { label: "Active CHWs", value: "200+" },
      { label: "Avg. Earnings", value: "$32", suffix: "/hour" },
      { label: "Member Cost", value: "$0" },
    ],
    badges: [
      { icon: Shield, label: "HIPAA Compliant" },
      { icon: CheckCircle, label: "Medi-Cal Reimbursed" },
      { icon: DollarSign, label: "Flexible Schedule" },
    ],
  },
  member: {
    image: heroMemberImage,
    imageAlt: "Community member receiving support and guidance from a healthcare navigator",
    headline: <>Get the help you need,{" "}<span className="text-secondary">at no cost.</span></>,
    description: <>Compass pairs you with a <strong className="text-foreground">trained Community Health Worker</strong> who speaks your language and knows your neighborhood — to help with <strong className="text-foreground">housing, food, healthcare,</strong> and more.</>,
    cta: { label: "Get Matched with a CHW", route: "/waitlist" },
    secondaryCta: { label: "Learn More" },
    stats: [
      { label: "Members Helped", value: "1,200+" },
      { label: "Service Areas", value: "5" },
      { label: "Your Cost", value: "$0" },
    ],
    badges: [
      { icon: Heart, label: "100% Free" },
      { icon: Users, label: "Bilingual CHWs" },
      { icon: Clock, label: "Same-Week Matching" },
    ],
  },
};

const Hero = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<ViewMode>("chw");
  const data = viewData[activeView];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <img src={compassIcon} alt="Compass logo" className="w-7 h-7" />
            Compass<span className="text-secondary">CHW</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#services" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#for-chws" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">For CHWs</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="default" size="sm" className="text-primary-foreground" onClick={() => navigate("/waitlist")}>Join Waitlist</Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-card border border-border rounded-full p-1 shadow-card">
            {(["chw", "member"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveView(mode)}
                className={`relative px-6 py-2.5 rounded-full text-body-sm font-semibold transition-all duration-300 ${
                  activeView === mode
                    ? "bg-primary text-primary-foreground shadow-elevated"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode === "chw" ? "I'm a CHW" : "I'm a Community Member"}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-label text-primary uppercase">Launching in Los Angeles</span>
                </div>

                <h1 className="text-display-lg md:text-display-xl tracking-tight text-foreground">
                  {data.headline}
                </h1>

                <p className="mt-5 text-body-lg text-muted-foreground max-w-lg">
                  {data.description}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="xl" className="text-primary-foreground" onClick={() => navigate(data.cta.route)}>
                    {data.cta.label}
                    <ArrowRight className="ml-1" />
                  </Button>
                  <Button variant="outline" size="xl">
                    {data.secondaryCta.label}
                  </Button>
                </div>

                {/* Badges */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {data.badges.map(({ icon: Icon, label }) => (
                    <div key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border shadow-card">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-body-sm font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    width={1280}
                    height={960}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-compass-dark/40 via-transparent to-transparent" />

                  {/* Floating stat card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-primary/95 backdrop-blur-md rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      {data.stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center gap-4">
                          {i > 0 && <div className="h-10 w-px bg-primary-foreground/20" />}
                          <div>
                            <p className="text-label text-primary-foreground/70 uppercase">{stat.label}</p>
                            <p className="text-display-sm text-primary-foreground">
                              {stat.value}
                              {stat.suffix && <span className="text-body-sm text-primary-foreground/70">{stat.suffix}</span>}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
