import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Politique de Confidentialité</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Collecte des Informations</h2>
            <p className="text-slate-300 leading-relaxed">
              Nous collectons les informations que vous nous fournissez directement, ainsi que les informations
              collectées automatiquement lors de l'utilisation de notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Utilisation des Informations</h2>
            <p className="text-slate-300 leading-relaxed">
              Les informations collectées sont utilisées pour améliorer la qualité de nos services, personnaliser le
              contenu et assurer la sécurité du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Protection des Données</h2>
            <p className="text-slate-300 leading-relaxed">
              Nous prenons toutes les mesures nécessaires pour protéger vos données personnelles contre l'accès non
              autorisé, la modification ou la destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Vos Droits</h2>
            <p className="text-slate-300 leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du
              traitement, de portabilité des données et d'opposition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              Pour toute question concernant notre politique de confidentialité, veuillez nous contacter à :
              privacy@leparissportifs.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Modifications</h2>
            <p className="text-slate-300 leading-relaxed">
              Cette politique de confidentialité peut être mise à jour périodiquement. Nous vous encourageons à la
              consulter régulièrement.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
