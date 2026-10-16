export function SiteFooter() {
  return (
    <footer className="bg-[#1d1d1b] px-5 py-12 text-white/60 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <div className="font-serif text-xl text-white">
            Maison <i className="font-normal text-[#c9a96e]">&</i> Co
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6">L&apos;immobilier avec sens, expertise et élégance.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="/#accueil" className="hover:text-white">Accueil</a>
          <a href="/#biens" className="hover:text-white">Nos biens</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
          <a href="/#contact" className="hover:text-white">Mentions légales</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs">
        © 2025 Maison & Co Immobilier · Tunis, Tunisie
      </div>
    </footer>
  )
}
