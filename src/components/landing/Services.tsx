import { motion } from "framer-motion";
import { Home, Pill, Apple, Brain, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Housing",
    description: "Rental assistance, shelter navigation, and housing stability support.",
    color: "bg-compass-green/10 text-compass-green",
  },
  {
    icon: Pill,
    title: "Rehab & Recovery",
    description: "Substance use recovery resources, sober living, and peer support connections.",
    color: "bg-compass-gold/10 text-compass-gold",
  },
  {
    icon: Apple,
    title: "Food & Pantry",
    description: "Food pantry access, CalFresh enrollment, and nutrition program navigation.",
    color: "bg-compass-green-light/10 text-compass-green-light",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Counseling referrals, crisis support resources, and wellness check-ins.",
    color: "bg-compass-sage/10 text-compass-sage",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Medi-Cal enrollment, appointment scheduling, and care coordination.",
    color: "bg-primary/10 text-primary",
  },
];

const stats = [
  { value: "81%", label: "CHW engagement rate" },
  { value: "5", label: "Service verticals" },
  { value: "$22", label: "Avg. cost per unit" },
  { value: "$0", label: "Cost to members" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-label text-compass-green uppercase tracking-wider mb-3">What We Cover</p>
          <h2 className="text-display-md md:text-display-lg text-foreground">
            Five areas where your <br className="hidden md:block" />neighbors can help
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-elevated hover:border-compass-green/20 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color} transition-transform group-hover:scale-110`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-dark rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-display-md md:text-display-lg text-primary-foreground font-display">{stat.value}</p>
                <p className="text-body-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
