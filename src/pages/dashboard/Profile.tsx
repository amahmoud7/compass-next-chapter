import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Phone, Shield, Award, Edit2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const certifications = [
  { name: "CHW Certification — LA County", date: "Jan 2025" },
  { name: "HIPAA Training", date: "Mar 2025" },
  { name: "Mental Health First Aid", date: "Nov 2024" },
];

const serviceAreas = ["Housing", "Healthcare", "Food & Pantry", "Mental Health", "Rehab & Recovery"];

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) setUserEmail(data.user.email);
    });
  }, []);

  return (
    <div className="max-w-3xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-display-sm text-foreground">Profile</h1>
        <p className="text-body-md text-muted-foreground mt-1">Manage your CHW profile and credentials.</p>
      </motion.div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="h-24 bg-gradient-hero" />
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-10 mb-4">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center border-4 border-card shadow-elevated">
              <User className="w-9 h-9 text-primary-foreground" />
            </div>
            <div className="pb-1 flex-1">
              <h2 className="font-display font-bold text-foreground text-display-sm">Carlos Hernandez</h2>
              <p className="text-body-sm text-muted-foreground">Community Health Worker</p>
            </div>
            <Button variant="outline" size="sm" className="mb-1">
              <Edit2 className="w-3.5 h-3.5 mr-1.5" /> Edit
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Mail, label: "Email", value: userEmail || "carlos@example.com" },
              { icon: Phone, label: "Phone", value: "(323) 555-0147" },
              { icon: MapPin, label: "Area", value: "East Los Angeles, CA" },
              { icon: Shield, label: "Status", value: "Verified CHW" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-label text-muted-foreground">{item.label}</p>
                  <p className="text-body-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <h2 className="font-display font-bold text-foreground text-body-lg mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-compass-gold" /> Certifications
        </h2>
        <div className="space-y-3">
          {certifications.map((c) => (
            <div key={c.name} className="flex items-center justify-between p-3 rounded-xl bg-muted/40">
              <p className="text-body-sm font-medium text-foreground">{c.name}</p>
              <span className="text-label text-muted-foreground">{c.date}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Service Areas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <h2 className="font-display font-bold text-foreground text-body-lg mb-4">Active Service Areas</h2>
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <span key={a} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-body-sm font-medium">
              {a}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
