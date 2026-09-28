// Single source of truth — maps project id ↔ URL slug
export const PROJECT_SLUGS: Record<number, string> = {
  1: "spandana-gardenia",
  2: "vibrant-sathyavan",
  3: "sumadhura-panorama",
  4: "assetz-codename-palmscape",
  5: "prestige-gardenia-estate",
};

// Reverse map: slug → id
export const SLUG_TO_ID: Record<string, number> = Object.fromEntries(
  Object.entries(PROJECT_SLUGS).map(([id, slug]) => [slug, Number(id)])
);

export const getProjectSlug = (id: number): string =>
  PROJECT_SLUGS[id] ?? String(id);

export const getProjectId = (slug: string): number =>
  SLUG_TO_ID[slug] ?? parseInt(slug, 10);
