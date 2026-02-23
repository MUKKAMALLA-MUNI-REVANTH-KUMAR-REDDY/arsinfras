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
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Awards & <span className="gold-text">Recognition</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col items-center rounded-lg border bg-card p-8 text-center transition-shadow hover:shadow-lg"
            >
              <award.icon className="mb-4 text-accent" size={40} />
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
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
