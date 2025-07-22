import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-green-200 py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          {/* Logo et Nom du Site */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <h2 className="text-slate-800 font-bold text-xl">ParisSportifsFrance</h2>
            </div>
          </div>

          {/* 18+ Badge Mobile */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <div className="text-slate-600 text-sm text-center">
              <p>Jeu responsable et sécurisé</p>
              <p>Interdit aux mineurs</p>
            </div>
          </div>

          {/* Navigation Mobile */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-slate-600 text-sm">
              <Link href="/a-propos" className="hover:text-green-600">
                À Propos
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-green-600">
                Politique de Confidentialité
              </Link>
              <Link href="/politique-cookies" className="hover:text-green-600">
                Politique des Cookies
              </Link>
              <Link href="/mentions-legales" className="hover:text-green-600">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          {/* Logo et Nom du Site */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <h2 className="text-slate-800 font-bold text-xl">ParisSportifsFrance</h2>
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="flex items-center gap-6 text-slate-600 text-sm">
            <Link href="/a-propos" className="hover:text-green-600">
              À Propos
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-green-600">
              Politique de Confidentialité
            </Link>
            <Link href="/politique-cookies" className="hover:text-green-600">
              Politique des Cookies
            </Link>
            <Link href="/mentions-legales" className="hover:text-green-600">
              Mentions Légales
            </Link>
          </div>

          {/* 18+ Badge Desktop */}
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
            <span className="text-white font-bold text-sm">18+</span>
          </div>
        </div>

        {/* Section Organismes */}
        <div className="mt-8 pt-6 border-t border-green-200">
          <h4 className="text-slate-800 font-bold mb-6 text-center text-sm md:text-base">
            Organismes de Protection et de Régulation
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            <Link
              href="https://anj.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img
                src="/logo-anj.svg"
                alt="ANJ - Autorité Nationale des Jeux"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img
                src="/jouers-info-service.png"
                alt="Joueurs Info Service"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img src="/logo-gamstop.svg" alt="GAMSTOP" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.sos-joueurs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img src="/logo-sos-joueurs.svg" alt="SOS Joueurs" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.mediateur-jeux.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img
                src="/logo-mediateurs-des-jeux.png"
                alt="Médiateur des Jeux"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.adictel.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black  rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors border border-green-200"
            >
              <img src="/logo-adictel.svg" alt="ADICTEL" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <div className="bg-slate-50 rounded-lg p-2 md:p-4 flex items-center justify-center border border-green-200">
              <img src="/icn-ssl.svg" alt="SSL Sécurisé" className="h-8 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-6">
          <div className="bg-slate-100 rounded-lg p-6 mb-6">
            <h4 className="text-slate-800 font-bold mb-4 text-center">Jeu Responsable - Avertissement Important</h4>
            <div className="text-slate-700 text-sm space-y-3">
              <p className="text-center font-semibold">
                Les paris sportifs peuvent être dangereux : pertes d'argent, conflits familiaux, addiction.
              </p>
              <p className="text-center">
                <strong>Interdit aux mineurs de 18 ans.</strong> Le jeu doit rester un plaisir et ne jamais devenir une
                source de revenus.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <p className="font-semibold">Aide et Support :</p>
                  <p>
                    Joueurs Info Service : <strong>09 74 75 13 13</strong>
                  </p>
                  <p>www.joueurs-info-service.fr</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Régulation :</p>
                  <p>Sites licenciés par l'ANJ</p>
                  <p>Autorité Nationale des Jeux</p>
                </div>
              </div>
              <p className="text-center text-xs mt-4 font-semibold">
                Ne pariez que ce que vous pouvez vous permettre de perdre. Fixez-vous des limites de temps et d'argent.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-6 text-center text-slate-500 text-xs md:text-sm">
          <p>&copy; 2025 ParisSportifsFrance.com - Tous droits réservés</p>
          <p className="mt-2">Comparateur indépendant de sites de paris sportifs en France</p>
        </div>
      </div>
    </footer>
  )
}
