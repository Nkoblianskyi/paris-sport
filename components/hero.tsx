"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <section className="w-full">
        <div className="container mx-auto max-w-[1220px] max-h-[300px] flex items-center relative bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-green-200">
          <div className="text-center relative z-10 w-full py-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">TOP</span> <span className="text-slate-800">CLASSEMENT</span>{" "}
              <span className="text-red-600">PARIS</span> <span className="text-green-600">SPORTIFS</span>{" "}
              <span className="text-slate-800">FRANCE</span>
            </h1>

            <div className="text-slate-600 mb-4 text-xs md:text-sm">Dernière mise à jour : {formattedDate}</div>

            <p className="text-sm md:text-base text-slate-700 max-w-4xl mx-auto leading-relaxed mb-6">
              Notre classement expert des meilleurs sites de paris sportifs en France. Nous analysons les bonus, les
              cotes, la sécurité et la qualité du service pour vous aider à choisir la meilleure plateforme de paris.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
              <div className="flex items-center space-x-2">
                <img src="/flag.png" alt="France" className="w-6 h-4 md:w-9 md:h-6" />
                <span className="text-slate-800 font-semibold">LICENCIÉ ANJ</span>
              </div>

              <button
                onClick={() => setShow18Modal(true)}
                className="text-red-600 font-bold hover:text-red-700 cursor-pointer"
              >
                18+
              </button>

              <button
                onClick={() => setShowRulesModal(true)}
                className="text-slate-800 font-semibold hover:text-slate-900 cursor-pointer"
              >
                RÈGLES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 18+ */}
      <Dialog open={show18Modal} onOpenChange={setShow18Modal}>
        <DialogContent className="max-w-md mx-4 bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-lg md:text-xl font-bold">
              18+ Réservé aux Adultes
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-black text-sm md:text-base">
            <p>
              <strong>Limite d'âge :</strong> Vous devez avoir au moins 18 ans pour participer aux activités de paris
              sur les sites licenciés français.
            </p>

            <p>
              <strong>Jeu responsable :</strong> Les paris doivent être un divertissement, pas un moyen de gagner de
              l'argent. Ne pariez que les montants que vous pouvez vous permettre de perdre.
            </p>

            <p>
              <strong>Fixez des limites :</strong> Utilisez les outils proposés par les sites de paris pour définir des
              limites de dépôt, de perte et de temps.
            </p>

            <div className="p-4 rounded-lg border border-gray-200">
              <p className="font-semibold mb-2">Besoin d'aide ?</p>
              <p className="text-sm">Contactez ces organisations :</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>Joueurs Info Service - 09 74 75 13 13</li>
                <li>www.joueurs-info-service.fr - Conseil gratuit</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShow18Modal(false)} className="w-full bg-gray-600 hover:bg-gray-700 text-white">
            Compris
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Règles */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center text-slate-800 text-lg md:text-xl font-bold">
              Règles et Conditions
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-black text-sm md:text-base">
            <div>
              <h3 className="font-bold mb-2">Conditions Générales</h3>
              <p className="text-sm">
                Tous les sites de paris recommandés sont licenciés par l'ANJ (Autorité Nationale des Jeux) et respectent
                les lois françaises.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Conditions des Bonus</h3>
              <ul className="text-sm space-y-1">
                <li>Tous les bonus de bienvenue ont des exigences de mise entre 1x-10x</li>
                <li>Les bonus doivent être utilisés dans le délai imparti</li>
                <li>Lisez toujours les conditions complètes sur chaque site</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Retrait et Vérification</h3>
              <ul className="text-sm space-y-1">
                <li>Tous les gains sont versés après vérification d'identité réussie</li>
                <li>Les délais de retrait varient entre 1-5 jours ouvrables</li>
                <li>Des documents peuvent être requis lors du premier retrait</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Service Client</h3>
              <ul className="text-sm space-y-1">
                <li>Contactez le support du site pour les problèmes techniques</li>
                <li>Service client français disponible sur tous les sites recommandés</li>
                <li>Support via chat en direct, email ou téléphone</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-2">Ressources Jeu Responsable</h3>
              <p className="text-sm mb-2">Si vous rencontrez des problèmes avec votre jeu :</p>
              <ul className="text-sm space-y-1">
                <li>Joueurs Info Service - Ligne d'écoute et chat</li>
                <li>www.joueurs-info-service.fr - Traitement professionnel</li>
                <li>ANJ.fr - Information officielle</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShowRulesModal(false)} className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            Accepter et Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
