import { useEffect, useRef, useState } from "react";
import { Building2, User, Home, Ruler, Sparkles } from "lucide-react";

const stats = [
  { icon: User, value: 800, suffix: "+", label: "Customers" },
  { icon: Building2, value: 12, suffix: "+", label: "Completed Projects" },
  { icon: Home, value: 2, suffix: "+", label: "Ongoing Projects" },
  { icon: Sparkles, value: 3, suffix: "+", label: "Upcoming Projects" },
  { icon: Ruler, value: 40, suffix: "+ Acres", label: "Area Developed" },
];

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

const StatItem = ({
  icon: Icon,
  value,
  suffix,
  label,
  inView,
}: {
  icon: typeof Building2;
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) => {
  const count = useCounter(value, 2000, inView);

  return (
    <div className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
      <Icon className="mb-1 text-accent sm:mb-2" size={28} strokeWidth={1.8} />
      <span className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
        {Number.isInteger(value) ? Math.floor(count) : count}
        <span className="text-accent text-xl sm:text-2xl lg:text-3xl">{suffix}</span>
      </span>
      <span className="font-body text-xs text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="container mx-auto">
        {/* 2 cols on xs, 3 on sm, 5 on lg */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
