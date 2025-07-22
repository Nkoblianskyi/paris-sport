import { Star, Trophy, Medal, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  // Fonction pour déterminer quel badge montrer (seulement un)
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "MEILLEURE NOTE", color: "bg-green-600 text-white" }
    if (site.isTopLine) return { text: "CHOIX N°1", color: "bg-blue-600 text-white" }
    if (site.isPopular) return { text: "POPULAIRE", color: "bg-red-600 text-white" }
    if (site.isTrending) return { text: "TENDANCE", color: "bg-orange-600 text-white" }
    return null
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  // Éléments décoratifs sportifs basés sur le rang
  const getSportIcon = () => {
    switch (rank) {
      case 1:
        return <Trophy className="absolute top-6 right-6 w-8 h-8 text-green-500 opacity-30" />
      case 2:
        return <Medal className="absolute top-6 right-6 w-8 h-8 text-blue-500 opacity-30" />
      case 3:
        return <Award className="absolute top-6 right-6 w-8 h-8 text-red-500 opacity-30" />
      default:
        return null
    }
  }

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block group">
      <div
        className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.02] shadow-sm bg-white/95 backdrop-blur-sm ${
          isFirstItem ? "border-2 border-green-400 shadow-lg shadow-green-400/20" : "border border-slate-200"
        }`}
      >
        {/* Badge - centré en haut */}
        {primaryBadge && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <Badge
              className={`${primaryBadge.color} px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg rounded-full border-2 border-white`}
            >
              {primaryBadge.text}
            </Badge>
          </div>
        )}

        {/* Éléments décoratifs sportifs */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-100/20"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/20"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-50/30 rotate-45"></div>
        </div>

        {/* Icône sportive basée sur le rang */}
        {getSportIcon()}

        <div className="relative z-10">
          {/* Desktop and Tablet Layout */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-6">
            {/* Numéro de rang */}
            <div
              className={`w-12 h-12 font-bold rounded-full flex items-center justify-center text-xl flex-shrink-0 border-2 ${
                isFirstItem ? "bg-green-600 text-white border-green-400" : "bg-blue-600 text-white border-blue-400"
              }`}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 bg-black p-2 rounded-lg border">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[140px] h-[86px] lg:w-[160px] lg:h-[96px] object-contain"
              />
            </div>

            {/* Bonus */}
            <div className="flex-1 text-center">
              <div className="text-green-600 font-bold mb-1 text-xl">BONUS</div>
              <p className="text-red-600 font-semibold leading-tight text-2xl">{site.bonus}</p>
            </div>

            {/* Note */}
            <div className="text-center flex-shrink-0">
              <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1">
                {site.rating.toFixed(1)}
                <span className="text-sm text-slate-500">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${
                      i < site.stars ? "text-green-500 fill-green-500" : "text-transparent"
                    }`}
                  />
                ))}
              </div>
              <div className="text-slate-500 text-xs">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Bouton */}
            <div className="flex-shrink-0">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base border border-green-500">
                OBTENIR BONUS
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden pt-6">
            {/* Ligne du haut : Logo à gauche, Bonus à droite */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-shrink-0 bg-slate-50 p-2 rounded-lg border">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[120px] h-[72px] object-contain"
                />
              </div>
              <div className="flex-1 text-center pl-4">
                <div className="text-green-600 font-bold text-sm mb-1">BONUS</div>
                <p className="text-red-600 font-semibold leading-tight text-lg">{site.bonus}</p>
              </div>
            </div>

            {/* Note - в одну рядку */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-lg">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-slate-500">/10</span>
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${
                        i < site.stars ? "text-green-500 fill-green-500" : "text-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-slate-500 text-sm">
                <span>({site.reviews})</span>
              </div>
            </div>

            {/* Bouton */}
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold w-full py-3 border border-green-500">
              OBTENIR BONUS
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-slate-200 text-center">
          <p className="text-slate-700 text-xs leading-relaxed">
            <strong>18+ | Jeu responsable</strong> - Les paris peuvent être dangereux. Aide : 09 74 75 13 13
            <br />
            Site licencié ANJ - Ne pariez que ce que vous pouvez perdre
          </p>
        </div>
      </div>
    </a>
  )
}
