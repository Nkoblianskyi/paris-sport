export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "PMU.FR",
    logo: "/pmu.svg",
    bonus: "100% Jusqu'à 100€ Remboursés",
    url: "https://www.pmu.fr/",
    rating: 9.6,
    stars: 5,
    reviews: 4247,
    badges: ["TOP RATING", "TOP LINE"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Parions Sport En Ligne",
    logo: "/psel.svg",
    bonus: "100% Jusqu'à 100€ de Bonus 1er Pari Doublé",
    url: "https://www.enligne.parionssport.fdj.fr",
    rating: 9.4,
    stars: 5,
    reviews: 3156,
    badges: ["POPULAIRE", "TENDANCE"],
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "CircusBet",
    logo: "/circus-bet.png",
    bonus: "Booste Automatiquement 3 éléments dans Votre Pari Combiné",
    url: "https://www.circusbet.fr/",
    rating: 9.2,
    stars: 5,
    reviews: 2089,
    badges: ["TENDANCE"],
    isTrending: true,
  },
  {
    id: 4,
    name: "Winamax",
    logo: "/winamax.png",
    bonus: "1er Pari Remboursé En Cash Jusqu'à 100 €",
    url: "https://winamax.fr/",
    rating: 9.0,
    stars: 4,
    reviews: 3892,
    badges: ["POPULAIRE"],
    isPopular: true,
  },
  {
    id: 5,
    name: "NetBet",
    logo: "/netbet.png",
    bonus: "100% Jusqu'à 100€ + 100 Paris Gratuits",
    url: "https://www.netbet.fr/",
    rating: 8.8,
    stars: 4,
    reviews: 1534,
    badges: [],
  },
]
