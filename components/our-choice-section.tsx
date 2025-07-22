import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  // Récupérer le premier site des données mock (meilleur classement)
  const ourChoice = bettingSites[0]

  return (
    <section className="py-4 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-green-200">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sur Quoi Faut-il Se Concentrer</h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto">
              Lors du choix d'un site de paris sportifs, plusieurs critères essentiels doivent guider votre décision. La
              sécurité et la licence ANJ sont primordiales, suivies par la qualité des cotes, la variété des marchés, et
              la fiabilité des paiements. Un bon service client et une interface intuitive complètent les éléments clés.
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Notre Choix</h2>
            <p className="text-slate-600">Après une analyse rigoureuse, voici notre recommandation principale</p>
          </div>

          {/* Carte Principale redesignée */}
          <div className="relative bg-white border border-slate-200 shadow-md rounded-lg p-4 md:p-8 mb-8 overflow-hidden">
            {/* Fond subtil */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white opacity-50"></div>

            {/* Ligne décorative en haut */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-red-500"></div>

            <div className="relative z-10">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-slate-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm inline-block mb-4 shadow-sm">
                  CHOIX DE LA RÉDACTION
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                {/* Logo */}
                <div className="text-center order-1 md:order-none">
                  <div className="bg-black p-3 md:p-6 rounded-lg border border-slate-200 mb-3 md:mb-4 inline-block shadow-sm">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={ourChoice.name}
                      className="w-[150px] h-[90px] md:w-[200px] md:h-[120px] object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">{ourChoice.name}</h3>
                </div>

                {/* Informations Principales */}
                <div className="text-center order-2 md:order-none">
                  <div className="mb-4 md:mb-6">
                    <div className="text-slate-700 font-bold text-base md:text-lg mb-2">BONUS</div>
                    <p className="text-slate-800 font-bold text-lg md:text-xl bg-slate-100 px-3 py-2 md:px-4 md:py-2 rounded-lg">
                      {ourChoice.bonus}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 stroke-slate-400 stroke-[1.5px] ${
                            i < ourChoice.stars ? "text-slate-600 fill-slate-600" : "text-transparent"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-slate-800">
                      {ourChoice.rating.toFixed(1)}
                      <span className="text-sm text-slate-500">/10</span>
                    </div>
                    <div className="text-slate-500 text-sm">({ourChoice.reviews} évaluations)</div>
                  </div>
                </div>

                {/* Bouton d'Action */}
                <div className="text-center order-3 md:order-none">
                  <Button
                    asChild
                    className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg mb-3 md:mb-4 shadow-lg rounded-lg w-full"
                  >
                    <a href={ourChoice.url} target="_blank" rel="noopener noreferrer">
                      PARIER MAINTENANT
                    </a>
                  </Button>
                  <p className="text-slate-500 text-sm">Inscription rapide et sécurisée</p>
                </div>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Pourquoi Notre Choix ?</h3>

            <div className="grid md:grid-cols-2 gap-8 text-slate-600">
              <div>
                <h4 className="text-slate-800 font-bold mb-2">Sécurité et Licence</h4>
                <p className="mb-4">Licence ANJ valide, cryptage SSL et fonds des joueurs totalement protégés.</p>

                <h4 className="text-slate-800 font-bold mb-2">Cotes Compétitives</h4>
                <p className="mb-4">Parmi les meilleures cotes du marché français, notamment sur la Ligue 1.</p>

                <h4 className="text-slate-800 font-bold mb-2">Paiements Rapides</h4>
                <p>PayPal, cartes bancaires et retraits traités en moins de 24 heures.</p>
              </div>

              <div>
                <h4 className="text-slate-800 font-bold mb-2">Service Client</h4>
                <p className="mb-4">Support en français par chat, email et téléphone tous les jours.</p>

                <h4 className="text-slate-800 font-bold mb-2">Bonus et Promotions</h4>
                <p className="mb-4">Conditions équitables, exigences de mise faibles et promotions régulières.</p>

                <h4 className="text-slate-800 font-bold mb-2">Expérience Utilisateur</h4>
                <p>Interface intuitive, excellente app mobile et streaming en direct de qualité.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-100 border border-slate-300 rounded text-center">
              <p className="text-slate-700 text-sm font-semibold">
                Jouez de manière responsable. Réservé aux plus de 18 ans. Le jeu peut rendre dépendant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
