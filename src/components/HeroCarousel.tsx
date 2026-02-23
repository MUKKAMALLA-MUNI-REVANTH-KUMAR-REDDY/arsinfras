import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Delivering Happiness Since 2010",
    subtitle: "Premium Apartments & Villas across South India",
  },
  {
    image: hero3,
    title: "Luxury Living Redefined",
    subtitle: "Thoughtfully designed homes for modern families",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-primary-foreground">ARS INFRA DEVELOPERS PVT LTD</h1>
        <h1 className="mb-4 max-w-3xl font-display text-4xl font-bold text-primary-foreground md:text-6xl animate-fade-up">
          {slides[current].title}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {slides[current].subtitle}
        </p>
        <a
          href="#projects"
          className="rounded-md bg-accent px-8 py-3 font-body font-semibold text-accent-foreground transition-opacity hover:opacity-90 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Projects
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/30 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-card/50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/30 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-card/50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "w-8 bg-accent" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
