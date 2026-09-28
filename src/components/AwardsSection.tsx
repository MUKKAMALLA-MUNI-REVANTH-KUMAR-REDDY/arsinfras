import { Award, Star, Trophy } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Real Estate Developer", year: "2023", org: "South India Real Estate Awards" },
  { icon: Star, title: "Excellence in Design", year: "2022", org: "National Housing Awards" },
  { icon: Award, title: "Customer Satisfaction Award", year: "2021", org: "Property Excellence Forum" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="container mx-auto">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Awards & <span className="gold-text">Recognition</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent sm:w-16" />
        </div>

        {/* 1 col on xs, 2 on sm, 3 on lg */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg sm:p-8"
            >
              <award.icon className="mb-3 text-accent sm:mb-4" size={36} />
              <h3 className="mb-1 font-display text-base font-semibold text-foreground sm:text-lg">
                {award.title}
              </h3>
              <p className="text-sm text-muted-foreground">{award.org}</p>
              <span className="mt-2 text-xs font-semibold text-primary">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
