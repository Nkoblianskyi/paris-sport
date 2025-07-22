import { Header } from "@/components/header"

export default function PolitiqueCookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 bg-slate-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Politique des Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-blue-600 text-lg">Dernière mise à jour : Janvier 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Qu'est-ce qu'un Cookie ?</h2>
            <p className="text-slate-700 leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. Les
              cookies nous aident à mémoriser vos préférences et à améliorer votre expérience de navigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Comment nous utilisons les Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site
              </p>
              <p>
                <strong>Cookies analytiques :</strong> Pour analyser le trafic et l'utilisation du site
              </p>
              <p>
                <strong>Cookies de personnalisation :</strong> Pour adapter le contenu à vos préférences
              </p>
              <p>
                <strong>Cookies de sécurité :</strong> Pour protéger votre navigation
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Gestion des Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              Vous pouvez contrôler et supprimer les cookies selon vos souhaits. Vous pouvez supprimer tous les cookies
              déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour qu'ils les bloquent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
            <p className="text-slate-700 leading-relaxed">
              Pour toute question concernant notre utilisation des cookies, contactez-nous à :
              cookies@parissportifsfrance.com
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
