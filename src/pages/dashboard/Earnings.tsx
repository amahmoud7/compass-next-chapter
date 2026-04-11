import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react";

const weeklyData = [
  { day: "Mon", amount: 44 },
  { day: "Tue", amount: 22 },
  { day: "Wed", amount: 66 },
  { day: "Thu", amount: 22 },
  { day: "Fri", amount: 22 },
  { day: "Sat", amount: 0 },
  { day: "Sun", amount: 0 },
];
const maxAmount = Math.max(...weeklyData.map((d) => d.amount));

const transactions = [
  { id: 1, label: "Housing Support — Maria G.", date: "Apr 11", amount: "$22.00", status: "Pending" },
  { id: 2, label: "Healthcare Nav — James T.", date: "Apr 10", amount: "$22.00", status: "Paid" },
  { id: 3, label: "Food & Pantry — David R.", date: "Apr 9", amount: "$22.00", status: "Paid" },
  { id: 4, label: "Mental Health — Ana P.", date: "Apr 9", amount: "$22.00", status: "Paid" },
  { id: 5, label: "Housing Support — Carlos M.", date: "Apr 8", amount: "$22.00", status: "Paid" },
  { id: 6, label: "Rehab & Recovery — Lisa K.", date: "Apr 7", amount: "$22.00", status: "Paid" },
];

const Earnings = () => {
  return (
    <div className="max-w-5xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-display-sm text-foreground">Earnings</h1>
        <p className="text-body-md text-muted-foreground mt-1">Track your Medi-Cal reimbursements and payouts.</p>
      </motion.div>

      {/* Stat row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {[
          { icon: DollarSign, label: "This Week", value: "$176", change: "+12%", up: true },
          { icon: TrendingUp, label: "This Month", value: "$528", change: "+8%", up: true },
          { icon: Calendar, label: "All Time", value: "$1,408", change: "64 sessions", up: true },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-label text-secondary flex items-center gap-0.5">
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <p className="text-display-sm text-foreground font-display">{s.value}</p>
            <p className="text-body-sm text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Bar chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <h2 className="font-display font-bold text-foreground text-body-lg mb-6">Weekly Breakdown</h2>
        <div className="flex items-end gap-3 h-40">
          {weeklyData.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-label text-muted-foreground">${d.amount}</span>
              <div
                className="w-full rounded-lg bg-primary/20 transition-all relative overflow-hidden"
                style={{ height: maxAmount > 0 ? `${Math.max((d.amount / maxAmount) * 100, 4)}%` : "4%" }}
              >
                <div className="absolute inset-0 bg-gradient-hero rounded-lg" style={{ opacity: d.amount > 0 ? 1 : 0.2 }} />
              </div>
              <span className="text-label text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Transaction list */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-display font-bold text-foreground text-body-lg">Transactions</h2>
        </div>
        <div className="divide-y divide-border">
          {transactions.map((t) => (
            <div key={t.id} className="px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
              <div>
                <p className="text-body-md font-medium text-foreground">{t.label}</p>
                <p className="text-body-sm text-muted-foreground">{t.date}</p>
              </div>
              <div className="text-right">
                <p className="text-body-md font-bold text-foreground">{t.amount}</p>
                <span className={`text-label px-2 py-0.5 rounded-full ${t.status === "Paid" ? "bg-primary/15 text-primary" : "bg-compass-gold/15 text-compass-gold"}`}>
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Earnings;
