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
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100svh - 3.25rem)", minHeight: "26rem" }}
    >
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

      {/* Content — centred, all text wraps */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
        {/* Company name — wraps on very small screens */}
        <p className="mb-2 w-full text-[0.6rem] font-bold uppercase tracking-widest text-white/90 sm:text-xs md:text-sm">
          ARS INFRA DEVELOPERS PVT LTD
        </p>

        {/* Title */}
        <h2 className="mb-3 w-full font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl animate-fade-up">
          {slides[current].title}
        </h2>

        {/* Subtitle */}
        <p
          className="mb-6 w-full text-sm leading-relaxed text-white/80 sm:text-base md:text-lg animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {slides[current].subtitle}
        </p>

        {/* CTA */}
        <a
          href="#projects"
          className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:px-8 sm:py-3 sm:text-base animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Projects
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-1.5 text-white backdrop-blur-sm transition hover:bg-white/40 sm:left-4 sm:p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-1.5 text-white backdrop-blur-sm transition hover:bg-white/40 sm:right-4 sm:p-2"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-accent" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
