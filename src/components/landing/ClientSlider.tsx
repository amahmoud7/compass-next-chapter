import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

const logos = [
  { name: "Kaiser Permanente", initials: "KP" },
  { name: "LA County DPSS", initials: "DPSS" },
  { name: "Medi-Cal", initials: "MC" },
  { name: "Blue Shield CA", initials: "BS" },
  { name: "Health Net", initials: "HN" },
  { name: "CalOptima", initials: "CO" },
  { name: "LA Care", initials: "LAC" },
  { name: "Molina Healthcare", initials: "MH" },
];

export default function ClientSlider() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-label text-muted-foreground uppercase tracking-widest mb-2">
            Trusted Partners
          </p>
          <h2 className="text-display-sm text-foreground">
            Working with leading health organizations
          </h2>
        </div>

        <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-xl",
                "bg-card border border-border shadow-card",
                "select-none whitespace-nowrap"
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-label font-bold text-primary">
                  {logo.initials}
                </span>
              </div>
              <span className="text-body-sm font-semibold text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
