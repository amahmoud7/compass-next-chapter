import { motion } from "framer-motion";
import { CalendarCheck, Clock, MapPin, Filter, Home, Pill, Apple, Brain, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceIcons: Record<string, React.ElementType> = {
  Housing: Home,
  "Rehab & Recovery": Pill,
  "Food & Pantry": Apple,
  "Mental Health": Brain,
  Healthcare: HeartPulse,
};

const sessions = [
  { id: 1, member: "Maria G.", service: "Housing", time: "2:00 PM", date: "Apr 11, 2026", status: "Upcoming", note: "Rental assistance application review", location: "East LA" },
  { id: 2, member: "James T.", service: "Healthcare", time: "4:30 PM", date: "Apr 11, 2026", status: "Upcoming", note: "Medi-Cal enrollment follow-up", location: "Boyle Heights" },
  { id: 3, member: "Rosa L.", service: "Food & Pantry", time: "10:00 AM", date: "Apr 12, 2026", status: "Scheduled", note: "CalFresh recertification help", location: "Downtown LA" },
  { id: 4, member: "Carlos M.", service: "Housing", time: "1:00 PM", date: "Apr 10, 2026", status: "Completed", note: "Shelter referral and intake form", location: "South LA" },
  { id: 5, member: "Ana P.", service: "Mental Health", time: "11:30 AM", date: "Apr 10, 2026", status: "Completed", note: "Counseling referral check-in", location: "East LA" },
  { id: 6, member: "David R.", service: "Food & Pantry", time: "3:00 PM", date: "Apr 9, 2026", status: "Completed", note: "Food pantry navigation", location: "Compton" },
];

const statusColors: Record<string, string> = {
  Upcoming: "bg-compass-gold/15 text-compass-gold",
  Scheduled: "bg-secondary/15 text-secondary",
  Completed: "bg-primary/15 text-primary",
};

const Sessions = () => {
  return (
    <div className="max-w-5xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-display-sm text-foreground">Sessions</h1>
            <p className="text-body-md text-muted-foreground mt-1">Track and manage your CHW sessions.</p>
          </div>
          <Button variant="outline" size="sm" className="self-start">
            <Filter className="w-4 h-4 mr-1.5" /> Filter
          </Button>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          { label: "Today", value: "2", sub: "sessions" },
          { label: "This Week", value: "8", sub: "sessions" },
          { label: "Total", value: "24", sub: "all-time" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-display-sm text-foreground font-display">{s.value}</p>
            <p className="text-label text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Session list */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="divide-y divide-border">
          {sessions.map((s) => {
            const ServiceIcon = serviceIcons[s.service] || HeartPulse;
            return (
              <div key={s.id} className="px-6 py-4 flex items-center gap-4 hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ServiceIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-display font-bold text-foreground text-body-md">{s.service}</p>
                    <span className={`text-label px-2 py-0.5 rounded-full ${statusColors[s.status]}`}>{s.status}</span>
                  </div>
                  <p className="text-body-sm text-muted-foreground truncate">w/ {s.member} — {s.note}</p>
                </div>
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <p className="text-body-sm font-medium text-foreground flex items-center gap-1 justify-end">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground" /> {s.time}
                  </p>
                  <p className="text-label text-muted-foreground flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3" /> {s.location} · {s.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Sessions;
