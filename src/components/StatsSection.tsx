import { useEffect, useRef, useState } from "react";
import { Building2, User, Home, Ruler } from "lucide-react";

const stats = [
  { icon: User, value: 800, suffix: "+", label: "Customers" },
  { icon: Building2, value: 12, suffix: "+", label: "Completed Projects" },
  { icon: Home, value: 2, suffix: "+", label: "Ongoing Projects" },
  { icon: Ruler, value: 40, suffix: "+ Acres", label: "Area Developed" },
];

// Simple counter hook
const useCounter = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Number((progress * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ icon: Icon, value, suffix, label, inView }: {
  icon: typeof Building2; value: number; suffix: string; label: string; inView: boolean;
}) => {
  const count = useCounter(value, 2000, inView);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Icon className="mb-2 text-accent" size={36} />
      <span className="font-display text-4xl font-bold text-foreground">
        {Number.isInteger(value) ? Math.floor(count) : count}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="font-body text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
