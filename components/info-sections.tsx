export function InfoSections() {
  return (
    <section className="py-4 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-green-200">
        <div className="p-8 space-y-12">
          {/* Comment nous sélectionnons les meilleurs sites */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Notre Méthodologie d'Évaluation</h3>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <p className="text-xl text-slate-800 font-semibold">
                ParisSportifsFrance est votre guide de confiance pour trouver les meilleures plateformes de paris
                sportifs en France. Notre équipe d'experts évalue chaque opérateur selon des critères rigoureux et
                transparents.
              </p>

              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Sécurité et Licences</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>Vérification obligatoire de la licence ANJ (Autorité Nationale des Jeux)</p>
                    <p>Analyse de la protection des données personnelles et financières des utilisateurs</p>
                    <p>Évaluation des systèmes de cryptage et sécurité des transactions</p>
                    <p>Vérification de la ségrégation des fonds des joueurs</p>
                    <p>Contrôle des mesures anti-fraude et vérification d'identité</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Bonus et Promotions</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>Analyse détaillée des conditions générales des bonus de bienvenue</p>
                    <p>Évaluation de l'équité des exigences de mise et délais</p>
                    <p>Comparaison de la valeur réelle des offres promotionnelles</p>
                    <p>Vérification de la transparence dans la communication des promotions</p>
                    <p>Analyse des promotions continues pour les joueurs réguliers</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Marchés et Cotes</h4>
                  <div className="text-left space-y-3 text-base">
                    <p>Comparaison des cotes sur les événements de Ligue 1 et compétitions internationales</p>
                    <p>Évaluation de la variété des marchés disponibles par événement</p>
                    <p>Analyse de la couverture des sports populaires en France</p>
                    <p>Vérification de la disponibilité des paris en direct</p>
                    <p>Test de la rapidité de mise à jour des cotes pendant les matchs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Système de Notation</h4>
                <p className="text-slate-800 mb-4">Chaque site de paris reçoit une note de 1 à 5 étoiles basée sur :</p>
                <div className="space-y-2 text-base text-left">
                  <p>
                    <strong className="text-slate-800">Sécurité (30%)</strong> - Licence, protection des données et
                    fonds
                  </p>
                  <p>
                    <strong className="text-slate-800">Bonus (25%)</strong> - Valeur et conditions des offres
                  </p>
                  <p>
                    <strong className="text-slate-800">Cotes (20%)</strong> - Compétitivité et variété des marchés
                  </p>
                  <p>
                    <strong className="text-slate-800">Ergonomie (15%)</strong> - Facilité d'utilisation et
                    fonctionnalités
                  </p>
                  <p>
                    <strong className="text-slate-800">Support (10%)</strong> - Qualité du service client
                  </p>
                </div>
              </div>

              <p className="text-lg font-semibold text-slate-800 mt-8 bg-slate-100 p-4 rounded-lg">
                <strong>Engagement d'Indépendance :</strong> Nos évaluations sont 100% indépendantes. Nous ne sommes pas
                influencés par des partenariats commerciaux et mettons à jour régulièrement nos analyses pour garantir
                une information toujours actuelle et fiable.
              </p>
            </div>
          </div>

          {/* Jeu Responsable */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Jeu Responsable en France</h3>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-6">
                <p className="text-slate-800 font-bold text-xl mb-4">ATTENTION : Le jeu peut rendre dépendant</p>
                <p className="text-slate-800">
                  Les paris sportifs doivent toujours être considérés comme un divertissement, jamais comme une source
                  de revenus. Ne pariez que ce que vous pouvez vous permettre de perdre.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-slate-800 font-bold mb-3">Signes d'un Jeu Sain</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>Définit des limites de temps et d'argent avant de parier</li>
                    <li>Considère les paris comme un divertissement, pas un investissement</li>
                    <li>S'arrête quand les limites fixées sont atteintes</li>
                    <li>Ne poursuit pas les pertes avec des mises plus importantes</li>
                    <li>Maintient d'autres activités et centres d'intérêt</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-slate-800 font-bold mb-3">Signaux d'Alarme</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>Parier plus que ce qu'on peut se permettre</li>
                    <li>Mentir sur le temps ou l'argent dépensé</li>
                    <li>Poursuivre les pertes avec des mises plus importantes</li>
                    <li>Négliger les responsabilités familiales/professionnelles</li>
                    <li>Ressentir de l'anxiété quand on ne peut pas parier</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-300 rounded-lg p-6 mt-8">
                <h4 className="text-slate-800 font-bold mb-4">Où Chercher de l'Aide en France</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p>
                      <strong className="text-slate-800">Joueurs Info Service :</strong>
                    </p>
                    <p className="text-slate-800 text-xl font-bold">09 74 75 13 13</p>
                    <p className="text-sm">Appel non surtaxé, 7j/7 de 8h à 2h</p>
                  </div>
                  <div>
                    <p>
                      <strong className="text-slate-800">Site Web :</strong>
                    </p>
                    <p className="text-slate-800">www.joueurs-info-service.fr</p>
                    <p className="text-sm">Ressources et soutien spécialisé</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-slate-800 font-bold text-lg mt-8 bg-slate-100 p-4 rounded-lg">
                INTERDIT AUX MINEURS DE 18 ANS
                <br />
                Le jeu est exclusivement réservé aux adultes et peut créer une dépendance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
