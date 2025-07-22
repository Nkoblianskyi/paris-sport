import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-200 shadow-sm relative z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-2 py-2">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-blue-600">Paris</span>
              <span className="text-red-600">Sportifs</span>
              <span className="text-green-600">France</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
