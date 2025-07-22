import { Header } from "@/components/header"

export default function PolitiqueCookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 bg-slate-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Politique des Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-slate-600 text-sm mb-6">
              <strong>Dernière mise à jour :</strong> 22 janvier 2025
            </p>

            <div className="text-slate-700 space-y-6">
              <p>
                Cette politique explique comment Les10MeilleursFrance.com utilise les cookies et technologies similaires
                pour améliorer votre expérience de navigation et fournir nos services.
              </p>
            </div>
          </div>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Qu'est-ce qu'un Cookie ?</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)
                lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences
                pendant une période donnée.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Types de Cookies</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur
                  </li>
                  <li>
                    <strong>Cookies persistants :</strong> Restent sur votre appareil jusqu'à expiration
                  </li>
                  <li>
                    <strong>Cookies first-party :</strong> Définis par notre site
                  </li>
                  <li>
                    <strong>Cookies third-party :</strong> Définis par des services tiers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Cookies Utilisés sur Notre Site</h2>
            <div className="text-slate-700 space-y-6">
              <div className="border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-green-600 mb-3">Cookies Strictement Nécessaires</h3>
                <p className="text-sm mb-3">
                  Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="text-left p-2">Nom</th>
                        <th className="text-left p-2">Finalité</th>
                        <th className="text-left p-2">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-mono">cookieConsent</td>
                        <td className="p-2">Mémoriser vos préférences de cookies</td>
                        <td className="p-2">1 an</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">sessionId</td>
                        <td className="p-2">Identifier votre session de navigation</td>
                        <td className="p-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-600 mb-3">Cookies Analytiques</h3>
                <p className="text-sm mb-3">Ces cookies nous aident à comprendre comment vous utilisez notre site.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="text-left p-2">Service</th>
                        <th className="text-left p-2">Finalité</th>
                        <th className="text-left p-2">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Google Analytics</td>
                        <td className="p-2">Analyser le trafic et l'utilisation du site</td>
                        <td className="p-2">2 ans</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Hotjar</td>
                        <td className="p-2">Comprendre le comportement des utilisateurs</td>
                        <td className="p-2">1 an</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-orange-600 mb-3">Cookies de Personnalisation</h3>
                <p className="text-sm mb-3">Ces cookies permettent de personnaliser votre expérience.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-orange-50">
                      <tr>
                        <th className="text-left p-2">Nom</th>
                        <th className="text-left p-2">Finalité</th>
                        <th className="text-left p-2">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-mono">userPreferences</td>
                        <td className="p-2">Mémoriser vos préférences d'affichage</td>
                        <td className="p-2">6 mois</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-mono">language</td>
                        <td className="p-2">Mémoriser votre langue préférée</td>
                        <td className="p-2">1 an</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-purple-600 mb-3">Cookies Publicitaires</h3>
                <p className="text-sm mb-3">Ces cookies permettent d'afficher des publicités pertinentes.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="text-left p-2">Service</th>
                        <th className="text-left p-2">Finalité</th>
                        <th className="text-left p-2">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Google Ads</td>
                        <td className="p-2">Afficher des publicités ciblées</td>
                        <td className="p-2">2 ans</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Facebook Pixel</td>
                        <td className="p-2">Mesurer l'efficacité des publicités</td>
                        <td className="p-2">3 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Gestion de Vos Préférences</h2>
            <div className="text-slate-700 space-y-4">
              <h3 className="text-lg font-semibold">Via Notre Bannière de Cookies</h3>
              <p>
                Lors de votre première visite, une bannière vous permet de choisir quels types de cookies accepter. Vous
                pouvez modifier vos préférences à tout moment en cliquant sur le lien "Gérer les cookies" en bas de
                page.
              </p>

              <h3 className="text-lg font-semibold">Via Votre Navigateur</h3>
              <p>Vous pouvez également gérer les cookies directement dans votre navigateur :</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Chrome</h4>
                  <p className="text-sm">Paramètres → Confidentialité et sécurité → Cookies</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Firefox</h4>
                  <p className="text-sm">Options → Vie privée et sécurité → Cookies</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Préférences → Confidentialité → Cookies</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Edge</h4>
                  <p className="text-sm">Paramètres → Cookies et autorisations de site</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Conséquences du Refus des Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>Si vous refusez certains cookies, votre expérience sur notre site pourrait être affectée :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cookies analytiques :</strong> Nous ne pourrons pas améliorer le site selon vos usages
                </li>
                <li>
                  <strong>Cookies de personnalisation :</strong> Vos préférences ne seront pas mémorisées
                </li>
                <li>
                  <strong>Cookies publicitaires :</strong> Les publicités seront moins pertinentes
                </li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note :</strong> Les cookies strictement nécessaires ne peuvent pas être refusés car ils sont
                  indispensables au fonctionnement du site.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Cookies de Partenaires</h2>
            <div className="text-slate-700 space-y-4">
              <p>
                Lorsque vous cliquez sur les liens vers nos partenaires (sites de paris sportifs), ces sites peuvent
                déposer leurs propres cookies sur votre appareil. Nous n'avons aucun contrôle sur ces cookies.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Partenaires Principaux</h4>
                <ul className="text-sm space-y-1">
                  <li>• PMU.FR - Consultez leur politique de cookies</li>
                  <li>• Parions Sport En Ligne - Consultez leur politique de cookies</li>
                  <li>• Winamax - Consultez leur politique de cookies</li>
                  <li>• NetBet - Consultez leur politique de cookies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Sécurité des Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous prenons des mesures pour sécuriser l'utilisation des cookies :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilisation du protocole HTTPS pour chiffrer les communications</li>
                <li>Cookies marqués comme "Secure" et "HttpOnly" quand approprié</li>
                <li>Durée de vie limitée pour tous les cookies</li>
                <li>Pas de stockage d'informations sensibles dans les cookies</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Modifications de cette Politique</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Nous pouvons modifier cette politique de cookies à tout moment pour refléter les changements dans nos
                pratiques ou pour des raisons légales. Les modifications importantes seront notifiées par une bannière
                sur notre site.
              </p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
            <div className="text-slate-700 space-y-3">
              <p>Pour toute question concernant notre utilisation des cookies, contactez-nous :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email : cookies@les10meilleursfrance.com</li>
                <li>Objet : "Question Politique Cookies"</li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">
              <strong>Avertissement Jeu Responsable :</strong> Les paris sportifs sont réservés aux plus de 18 ans.
              Jouez avec modération. En cas de problème : 09 74 75 13 13.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
