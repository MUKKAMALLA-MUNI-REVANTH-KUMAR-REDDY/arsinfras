const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            About <span className="text-primary">ARS INFRAS</span>
          </h2>
          <div className="mx-auto h-[3px] w-12 rounded-full bg-accent sm:w-16" />
        </div>

        {/* Main content split */}
        <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-8 md:grid-cols-2 md:items-start">
          {/* Left: primary description */}
          <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_8px_30px_-4px_hsla(160,40%,28%,0.18)] cursor-default sm:p-8">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:mb-4 sm:h-10 sm:w-10">
              <svg className="h-4 w-4 text-primary sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l1.9-5.7a8.5 8.5 0 1114.2 0L21 21" />
              </svg>
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:mb-3 sm:text-xl">Our Story</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
              ARS Infra Developers Pvt Ltd is a professionally managed real estate development and
              construction company headquartered in Bengaluru, Karnataka. Since its establishment
              in 2010, the company has been dedicated to delivering premium residential and plotted
              developments with a strong emphasis on design quality, engineering excellence, and
              ethical business practices.
            </p>
          </div>

          {/* Right: expertise */}
          <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_8px_30px_-4px_hsla(35,60%,52%,0.18)] cursor-default sm:p-8">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20 sm:mb-4 sm:h-10 sm:w-10">
              <svg className="h-4 w-4 text-accent sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:mb-3 sm:text-xl">Our Expertise</h3>
            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground sm:mb-5 sm:text-base">
              Our expertise includes residential apartments, villas, gated communities, plotted
              developments, and real estate Buy &amp; Sell services. We follow a customer-first
              philosophy and believe in building long-term relationships based on trust and
              transparency.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Apartments", "Villas", "Gated Communities", "Plotted Dev.", "Buy & Sell"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlight cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: (
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "North Bangalore Expansion",
              body: "Devanahalli · Rajanakunte · Kundana · STRR Road",
            },
            {
              icon: (
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: "Upcoming Projects",
              body: "Exciting new developments planned across North Bangalore.",
            },
            {
              icon: (
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Our Passion",
              body: "Real estate development — transforming land into thriving communities since 2010.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_10px_32px_-4px_hsla(35,60%,52%,0.15)] cursor-default sm:p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                {card.icon}
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-base">{card.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
