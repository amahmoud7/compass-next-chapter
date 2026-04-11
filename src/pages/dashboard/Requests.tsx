import { motion } from "framer-motion";
import { Inbox, Clock, CheckCircle, XCircle, MapPin, Home, Pill, Apple, Brain, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceIcons: Record<string, React.ElementType> = {
  Housing: Home,
  "Rehab & Recovery": Pill,
  "Food & Pantry": Apple,
  "Mental Health": Brain,
  Healthcare: HeartPulse,
};

const requests = [
  { id: 1, member: "Ana P.", service: "Mental Health", location: "East LA", time: "15 min ago", note: "Needs counseling referral for anxiety and stress management", status: "New" },
  { id: 2, member: "Luis R.", service: "Housing", location: "Boyle Heights", time: "1 hour ago", note: "Facing eviction, needs emergency housing assistance", status: "New" },
  { id: 3, member: "Sandra M.", service: "Healthcare", location: "South LA", time: "3 hours ago", note: "Medi-Cal enrollment assistance for family of 4", status: "New" },
  { id: 4, member: "David R.", service: "Food & Pantry", location: "Downtown LA", time: "Yesterday", note: "CalFresh application help", status: "Accepted" },
  { id: 5, member: "Teresa F.", service: "Rehab & Recovery", location: "Compton", time: "2 days ago", note: "Sober living referral and peer support connection", status: "Accepted" },
];

const statusColors: Record<string, string> = {
  New: "bg-compass-gold/15 text-compass-gold",
  Accepted: "bg-primary/15 text-primary",
  Declined: "bg-destructive/15 text-destructive",
};

const Requests = () => {
  return (
    <div className="max-w-5xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-display-sm text-foreground">Requests</h1>
        <p className="text-body-md text-muted-foreground mt-1">Incoming member requests waiting for your response.</p>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          { icon: Inbox, label: "New", value: "3", color: "text-compass-gold" },
          { icon: CheckCircle, label: "Accepted", value: "2", color: "text-primary" },
          { icon: XCircle, label: "Declined", value: "0", color: "text-destructive" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <div>
              <p className="text-display-sm text-foreground font-display">{s.value}</p>
              <p className="text-label text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Request cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="space-y-3"
      >
        {requests.map((r) => {
          const ServiceIcon = serviceIcons[r.service] || HeartPulse;
          return (
            <div key={r.id} className="bg-card border border-border rounded-2xl p-5 hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ServiceIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-display font-bold text-foreground text-body-md">{r.member}</p>
                    <span className={`text-label px-2 py-0.5 rounded-full ${statusColors[r.status]}`}>{r.status}</span>
                  </div>
                  <p className="text-body-sm font-medium text-secondary mb-1">{r.service}</p>
                  <p className="text-body-sm text-muted-foreground">{r.note}</p>
                  <div className="flex items-center gap-4 mt-2 text-label text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {r.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.time}</span>
                  </div>
                </div>
                {r.status === "New" && (
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="default" size="sm">Accept</Button>
                    <Button variant="outline" size="sm">Decline</Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Requests;
