export type Variant = "tower" | "terrace" | "pavilion" | "court";

export type Project = {
  slug: string;
  name: string;
  suburb: string;
  city: string;
  type: string;
  status: "Selling" | "Under construction" | "Completed" | "Coming soon";
  year: string;
  variant: Variant;
  homes: number;
  storeys: number;
  summary: string;
  details: string;
};

export const projects: Project[] = [
  {
    slug: "the-meridian",
    name: "The Meridian",
    suburb: "Shellharbour City",
    city: "Illawarra",
    type: "Mixed-use residential",
    status: "Selling",
    year: "2027",
    variant: "tower",
    homes: 86,
    storeys: 12,
    summary:
      "Eighty-six residences above a ground-floor activated retail precinct in the heart of Shellharbour City Centre.",
    details:
      "The Meridian anchors the northern edge of Shellharbour City Centre with a confident twelve-storey form. Ground-floor tenancies open directly onto the City Centre boulevard. Each residence is dual-aspect with recessed balconies, natural stone finishes and views across the lake to the escarpment beyond. Construction begins Q1 2026.",
  },
  {
    slug: "heron-park",
    name: "Heron Park",
    suburb: "Blackbutt",
    city: "Illawarra",
    type: "Terraced townhomes",
    status: "Under construction",
    year: "2026",
    variant: "terrace",
    homes: 34,
    storeys: 3,
    summary:
      "Thirty-four terraced townhomes set within a retained canopy of mature blackbutt trees.",
    details:
      "Heron Park responds to the topography of its bushland site rather than flattening it. Each townhome is set a half-storey into the slope, with a private rear garden and a first-floor study opening onto a treetop deck. Shared paths thread between homes and connect to the Blackbutt Reserve trail network. Completion expected late 2026.",
  },
  {
    slug: "corrimal-gardens",
    name: "Corrimal Gardens",
    suburb: "Corrimal",
    city: "Illawarra",
    type: "Boutique apartments",
    status: "Completed",
    year: "2024",
    variant: "pavilion",
    homes: 22,
    storeys: 4,
    summary:
      "Twenty-two low-rise apartments arranged around a lush central courtyard, two minutes from Corrimal Beach.",
    details:
      "A quiet building that earns its place on a residential street. Corrimal Gardens is four storeys of board-formed concrete and western red cedar, with deep overhanging eaves and a central garden courtyard planted with native coastal species. All twenty-two homes sold prior to completion. Completed and occupied in 2024.",
  },
  {
    slug: "south-point",
    name: "South Point",
    suburb: "Shellharbour Village",
    city: "Illawarra",
    type: "Coastal residences",
    status: "Coming soon",
    year: "2028",
    variant: "court",
    homes: 54,
    storeys: 6,
    summary:
      "A six-storey cliff-edge building of fifty-four residences, every one facing the Pacific.",
    details:
      "South Point occupies a rare site on the headland above Shellharbour Village. The building steps back in section so that all fifty-four residences face north-east across Bass Point to the ocean. Deep pre-cast concrete balconies provide shade and weather protection. Ground level is entirely public: a coastal path, a café and a viewing deck accessible to the village. DA lodgement planned for Q3 2026.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
