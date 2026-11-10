export type Variant = "tower" | "terrace" | "pavilion" | "court";

export type Project = {
  slug: string;
  name: string;
  suburb: string;
  city: string;
  type: string;
  status: "Now Selling" | "Sold Out" | "Under Management" | "Coming Soon";
  year: string;
  variant: Variant;
  homes: number;
  storeys: number;
  image: string;
  summary: string;
  details: string;
};

export const projects: Project[] = [
  {
    slug: "elevation-77",
    name: "Elevation 77",
    suburb: "Shellharbour City Centre",
    city: "Illawarra",
    type: "Multi-Level Residential",
    status: "Sold Out",
    year: "2022",
    variant: "tower",
    homes: 50,
    storeys: 8,
    image: "/Elevation.jpg",
    summary:
      "A landmark mixed-use tower in the heart of Shellharbour City Centre. Over 50 apartments sold off the plan — premium residences above an activated ground-floor retail precinct.",
    details:
      "Life at Elevation 77 is defined by the moments between. Morning coffee from the café below, evenings on your balcony as the sun drops behind the escarpment, weekends spent walking to the lake or the village without once touching your car. Each residence was designed to bring the outside in, with generous glazing, north-facing aspects and premium finishes. Practical completion was achieved in December 2022, with secure basement parking, lift access, and ground-floor retail tenancies completing the offering.",
  },
  {
    slug: "bluewater",
    name: "Bluewater",
    suburb: "Kiama",
    city: "Illawarra",
    type: "Boutique Apartments",
    status: "Sold Out",
    year: "2022",
    variant: "pavilion",
    homes: 23,
    storeys: 4,
    image: "/bluewater.jpg",
    summary:
      "A boutique coastal apartment building capturing panoramic ocean and harbour views across Kiama's iconic blowhole headland. 23 residences designed for the discerning coastal buyer.",
    details:
      "Kiama is a town that gets under your skin. The sound of the blowhole on a still morning. The smell of salt in the air as you walk to the farmers market. The way the light sits on the harbour at dusk — golden, unhurried, entirely its own. Bluewater was designed for those who have found this place and decided they never want to leave. Each residence opens to the ocean through full-width glazing and north-facing terraces, so that the sea is never a backdrop — it is the view you wake up to, the one you come home to.",
  },
  {
    slug: "greenacre",
    name: "Greenacre",
    suburb: "Wollongong",
    city: "Illawarra",
    type: "Duplex",
    status: "Under Management",
    year: "2023",
    variant: "court",
    homes: 2,
    storeys: 2,
    image: "/12.jpg",
    summary:
      "A considered duplex residence on a tree-lined street in Wollongong — space, light, and a neighbourhood that actually feels like one.",
    details:
      "Wollongong is a city that has quietly become one of the most compelling places to live on the east coast. The ocean is minutes away. The escarpment rises behind you. The food scene has arrived, the arts precinct is alive, and the train to Sydney means you can have it all without sacrificing any of it. Greenacre places you at the heart of this — on a tree-lined street where the pace slows and the city noise fades, but everything you need is still within reach.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
