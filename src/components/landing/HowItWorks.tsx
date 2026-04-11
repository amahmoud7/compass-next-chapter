import { motion } from "framer-motion";
import { MessageSquare, Users, Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us what you need",
    description: "Share your situation — housing, food, recovery, or healthcare. No judgment, just help.",
  },
  {
    number: "02",
    icon: Users,
    title: "Get matched instantly",
    description: "We connect you with a trained Community Health Worker in your neighborhood who fits your needs.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Start your journey",
    description: "Meet with your CHW, get referrals, and track your progress — at no cost to you.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-label text-compass-green uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-display-md md:text-display-lg text-foreground">
            Three steps to <span className="text-gradient-brand">better health</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-primary-foreground font-display font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-body-md text-muted-foreground max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
