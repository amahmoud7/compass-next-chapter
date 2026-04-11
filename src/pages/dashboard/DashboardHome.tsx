import { motion } from "framer-motion";
import { CalendarCheck, DollarSign, Users, TrendingUp, ArrowRight, Clock, MapPin, Home, Pill, Apple, Brain, HeartPulse } from "lucide-react";

const serviceIcons: Record<string, React.ElementType> = {
  Housing: Home,
  "Rehab & Recovery": Pill,
  "Food & Pantry": Apple,
  "Mental Health": Brain,
  Healthcare: HeartPulse,
};

const upcomingSessions = [
  { id: 1, member: "Maria G.", service: "Housing", time: "2:00 PM", date: "Today", note: "Rental assistance application review" },
  { id: 2, member: "James T.", service: "Healthcare", time: "4:30 PM", date: "Today", note: "Medi-Cal enrollment follow-up" },
  { id: 3, member: "Rosa L.", service: "Food & Pantry", time: "10:00 AM", date: "Tomorrow", note: "CalFresh recertification help" },
];

const recentActivity = [
  { action: "Session completed", detail: "Housing Support with Carlos M.", time: "2 hours ago" },
  { action: "Payment received", detail: "$22.00 — Medi-Cal reimbursement", time: "Yesterday" },
  { action: "New request", detail: "Mental Health navigation from Ana P.", time: "Yesterday" },
  { action: "Session completed", detail: "Food & Pantry with David R.", time: "2 days ago" },
];

const DashboardHome = () => {
  return (
    <div className="max-w-6xl space-y-8">
      {/* Welcome */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-display-sm md:text-display-md text-foreground">Welcome back, <span className="text-secondary">Carlos</span></h1>
        <p className="text-body-lg text-muted-foreground mt-1">Here's what's happening with your sessions today.</p>
      </motion.div>

      {/* Stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { icon: DollarSign, label: "This Week", value: "$176", change: "+12%", color: "text-primary" },
          { icon: CalendarCheck, label: "Sessions Done", value: "24", change: "+3", color: "text-secondary" },
          { icon: Users, label: "Active Members", value: "8", change: "+1", color: "text-compass-gold" },
          { icon: TrendingUp, label: "Completion Rate", value: "94%", change: "+2%", color: "text-primary" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-2xl p-5 hover:shadow-card transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-label text-secondary">{stat.change}</span>
            </div>
            <p className="text-display-sm text-foreground font-display">{stat.value}</p>
            <p className="text-body-sm text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h2 className="font-display font-bold text-foreground text-body-lg">Upcoming Sessions</h2>
              <button className="text-body-sm text-primary font-semibold flex items-center gap-1 hover:underline">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="divide-y divide-border">
              {upcomingSessions.map((s) => {
                const ServiceIcon = serviceIcons[s.service] || HeartPulse;
                return (
                  <div key={s.id} className="px-6 py-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ServiceIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-foreground text-body-md">{s.service}</p>
                      <p className="text-body-sm text-muted-foreground truncate">w/ {s.member} — {s.note}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-body-sm font-semibold text-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" /> {s.time}
                      </p>
                      <p className="text-label text-muted-foreground">{s.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-display font-bold text-foreground text-body-lg">Recent Activity</h2>
            </div>
            <div className="p-4 space-y-3">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <div>
                    <p className="text-body-sm font-medium text-foreground">{a.action}</p>
                    <p className="text-body-sm text-muted-foreground">{a.detail}</p>
                    <p className="text-label text-muted-foreground/70 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Area Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <h2 className="font-display font-bold text-foreground text-body-lg mb-4">Your Service Areas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: "Housing", icon: Home, sessions: 8 },
            { name: "Rehab & Recovery", icon: Pill, sessions: 5 },
            { name: "Food & Pantry", icon: Apple, sessions: 6 },
            { name: "Mental Health", icon: Brain, sessions: 3 },
            { name: "Healthcare", icon: HeartPulse, sessions: 2 },
          ].map((area) => (
            <div key={area.name} className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-card transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
                <area.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display font-bold text-body-sm text-foreground">{area.name}</p>
              <p className="text-label text-muted-foreground">{area.sessions} sessions</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
