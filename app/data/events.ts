export interface CollectionItem {
  volume: string;
  slug: string;
  title: string;
  subtitle?: string;
  artist: string;
  location: string;
  image: string | null;
  description: string;
  time: string;
  active: boolean;
  details?: {
    curatorNote: string;
    duration: string;
    capacity: string;
    locationFull: string;
    credits: { role: string; name: string }[];
    setlist?: { name: string; duration: string }[];
    gallery: string[];
  };
}

export const COLLECTIONS: CollectionItem[] = [
  {
    volume: "VOLUME 01",
    slug: "darbuka-siva",
    title: "Maruvarthai Pesadhey",
    artist: "Darbuka Siva",
    location: "Museum Theater, Chennai",
    image: "/assets/vol_01_04.jpeg",
    description: "An Intimate musical experience with Darbuka Siva",
    time: "Jan 2026",
    active: true,
    details: {
      curatorNote: "One of its kind, the show unfolded in three acts, through an experimental approach, it explored the connections between global music and the evolution of Tamil cinema music, presenting the journey through a compelling narrative. The performance was warmly received by audiences, playing to an almost full house and earning enthusiastic appreciation.",
      duration: "90 minutes",
      capacity: "500 seats",
      locationFull: "Museum Theater, Egmore, Chennai",
      credits: [
        { role: "Primary Artist", name: "Darbuka Siva" },
        { role: "Curatorial Direction", name: "The Madras Collective" }
      ],
      // setlist: [
      //   { name: "I. The First Hush (Acoustic Intro)", duration: "14:20" },
      //   { name: "II. Resonance & Decay (Clay & Modulators)", duration: "22:15" },
      //   { name: "III. Coastal Synthetics (Field Recordings & Poly-synths)", duration: "18:40" },
      //   { name: "IV. Marutham (The Convergence)", duration: "28:10" }
      // ],
      gallery: [
        "/assets/vol_01_04.jpeg",
        "/assets/vol_01_01.jpeg",
        "/assets/vol_01_02.jpeg",
        "/assets/vol_01_03.jpeg",
        "/assets/vol_01_05.jpeg",
        "/assets/vol_01_06.jpeg",
        "/assets/vol_01_07.jpeg",
        "/assets/vol_01_08.jpeg",
        "/assets/vol_01_09.jpeg",
      ]
    },
  },
  {
    volume: "VOLUME 02",
    slug: "coming-soon",
    title: "Coming Soon",
    subtitle: "",
    artist: "TBD",
    location: "TBD",
    image: null,
    description: "--",
    time: "July-Aug 2026",
    active: false,
  },
];
