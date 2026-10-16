import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function ApartmentNotFound() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#232321]">
      <div className="relative bg-[#232321] pb-20 pt-28 text-white">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-5 pt-16 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b87b]">Maison & Co</p>
          <h1 className="mt-4 font-serif text-5xl">Ce bien n&apos;est plus disponible.</h1>
          <Link href="/#biens" className="mt-8 inline-flex rounded-xl bg-[#b69255] px-6 py-4 text-sm font-semibold text-white hover:bg-[#9f7c47]">
            Retour à la sélection
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
