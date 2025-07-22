import { Header } from "@/components/header"

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 bg-slate-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Politique de Confidentialité</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-slate-600 text-sm mb-6">
              <strong>Dernière mise à jour :</strong> 22 janvier 2025
            </p>

            <div className="text-slate-700 space-y-6">
              <p>
                Les10MeilleursFrance.com s'engage à protéger la confidentialité de ses utilisateurs. Cette politique
                explique comment nous collectons, utilisons et protégeons vos informations personnelles.
              </p>
            </div>
          </div>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Informations Collectées</h2>
            <div className="text-slate-700 space-y-4">
              <h3 className="text-lg font-semibold">Données Automatiquement Collectées</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse IP et localisation géographique approximative</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages visitées et temps passé sur le site</li>
                <li>Référent (site d'où vous venez)</li>
                <li>Cookies et technologies similaires</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Données Volontairement Fournies</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informations de contact si vous nous contactez</li>
                <li>Préférences de cookies</li>
                <li>Commentaires ou feedback</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Utilisation des Données</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Améliorer l'expérience utilisateur de notre site</li>
                <li>Analyser le trafic et l'utilisation du site</li>
                <li>Personnaliser le contenu affiché</li>
                <li>Assurer la sécurité et prévenir la fraude</li>
                <li>Respecter nos obligations légales</li>
                <li>Répondre à vos demandes de contact</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Cookies et Technologies Similaires</h2>
            <div className="text-slate-700 space-y-4">
              <h3 className="text-lg font-semibold">Types de Cookies Utilisés</h3>

              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600">Cookies Essentiels</h4>
                  <p className="text-sm">Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Cookies Analytiques</h4>
                  <p className="text-sm">Nous aident à comprendre comment les visiteurs utilisent notre site.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">Cookies de Personnalisation</h4>
                  <p className="text-sm">Permettent de mémoriser vos préférences et personnaliser votre expérience.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600">Cookies Publicitaires</h4>
                  <p className="text-sm">
                    Utilisés pour afficher des publicités pertinentes et mesurer leur efficacité.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Partage des Données</h2>
            <div className="text-slate-700 space-y-4">
              <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations avec :</p>

              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Partenaires Techniques</h4>
                  <p className="text-sm">Hébergeurs, services d'analyse (Google Analytics), CDN</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Partenaires Commerciaux</h4>
                  <p className="text-sm">
                    Sites de paris sportifs licenciés ANJ (uniquement si vous cliquez sur leurs liens)
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Autorités Légales</h4>
                  <p className="text-sm">Si requis par la loi ou pour protéger nos droits légitimes</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Vos Droits (RGPD)</h2>
            <div className="text-slate-700 space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Corriger des données inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> Demander la suppression de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> Récupérer vos données dans un format lisible
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données
                </li>
                <li>
                  <strong>Droit de limitation :</strong> Limiter le traitement de vos données
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Sécurité des Données</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Surveillance continue des systèmes</li>
                <li>Formation du personnel sur la protection des données</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Conservation des Données</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous conservons vos données personnelles :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Données de navigation :</strong> 25 mois maximum
                </li>
                <li>
                  <strong>Cookies :</strong> Selon les durées définies dans notre politique cookies
                </li>
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier contact
                </li>
                <li>
                  <strong>Données légales :</strong> Selon les obligations légales applicables
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">8. Transferts Internationaux</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas, nous nous
                assurons que des garanties appropriées sont en place (clauses contractuelles types, décisions
                d'adéquation).
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">9. Mineurs</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Notre site est destiné aux adultes de 18 ans et plus. Nous ne collectons pas sciemment de données
                personnelles auprès de mineurs. Si vous êtes parent et pensez que votre enfant nous a fourni des
                informations personnelles, contactez-nous immédiatement.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">10. Modifications de cette Politique</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications importantes
                seront notifiées par une bannière sur notre site. La date de dernière mise à jour est indiquée en haut
                de cette page.
              </p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous
                pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Par email : privacy@les10meilleursfrance.com</li>
                <li>Par courrier : Les10MeilleursFrance - Service Protection des Données</li>
              </ul>
              <p className="text-sm mt-4">
                <strong>Délégué à la Protection des Données :</strong> Disponible à l'adresse
                dpo@les10meilleursfrance.com
              </p>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Rappel Jeu Responsable :</strong> Les paris sportifs sont réservés aux plus de 18 ans et peuvent
              créer une dépendance. Jouez avec modération.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
