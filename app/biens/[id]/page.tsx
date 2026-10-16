import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Bath, BedDouble, Building2, Check, MapPin, Phone } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProperty, getRelatedProperties, properties } from '@/lib/properties'

type PageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return properties.map((property) => ({ id: String(property.id) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const property = getProperty(Number(id))
  if (!property) return { title: 'Bien introuvable | Maison & Co' }
  return {
    title: `${property.title} | Maison & Co`,
    description: property.summary,
  }
}

function visitTitle(type: string) {
  if (type === 'Appartement') return 'Visiter cet appartement'
  if (type === 'Villa') return 'Visiter cette villa'
  if (type === 'Maison') return 'Visiter cette maison'
  return 'Visiter ce bien'
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params
  const property = getProperty(Number(id))
  if (!property) notFound()

  const others = getRelatedProperties(property)

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#232321]">
      <SiteHeader />

      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#333] pb-28 pt-36">
        <img src={property.image} alt={property.title} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
          <Link href="/#biens" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-[#d6b87b]">
            <ArrowLeft size={16} /> Retour à la sélection
          </Link>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b87b]">
            <span className="h-px w-10 bg-[#d6b87b]" />
            {property.transaction} · {property.type}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-white md:text-7xl">{property.title}</h1>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <p className="flex items-center gap-2 text-white/80">
              <MapPin size={16} className="text-[#d6b87b]" /> {property.location}, Tunisie
            </p>
            <p className="font-serif text-4xl text-[#d6b87b] md:text-5xl">{property.price}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-[0_18px_50px_rgba(35,35,33,0.08)] sm:grid-cols-4 sm:p-4">
          <Fact icon={<Building2 />} label="Surface" value={property.surface} />
          <Fact icon={<BedDouble />} label="Pièces" value={property.rooms} />
          <Fact icon={<Bath />} label="Salles de bain" value={property.specs?.find((spec) => spec.label === 'Salles de bain')?.value ?? '—'} />
          <Fact icon={<MapPin />} label="Secteur" value={property.location} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:px-10 lg:py-20">
        <div>
          <p className="eyebrow">Le bien</p>
          <h2 className="section-title">
            Une adresse,<br />
            <i>un art de vivre.</i>
          </h2>
          <div className="mt-8 flex max-w-2xl flex-col gap-5 text-base leading-7 text-[#6f6c64]">
            {property.description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <h3 className="mt-12 font-serif text-3xl">Les atouts</h3>
          <div className="mt-5 grid gap-3 text-sm text-[#6f6c64] sm:grid-cols-2">
            {property.highlights?.map((item) => (
              <span key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e5d8bf] text-[#9f7c47]">
                  <Check size={14} />
                </span>
                {item}
              </span>
            ))}
          </div>

          <h3 className="mt-12 font-serif text-3xl">Caractéristiques</h3>
          <dl className="mt-5 divide-y divide-[#eeeae2] overflow-hidden rounded-2xl bg-white">
            {property.specs?.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between gap-6 px-5 py-4 text-sm">
                <dt className="text-[#9b9a94]">{spec.label}</dt>
                <dd className="font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="h-fit rounded-2xl bg-[#ebe7df] p-7 lg:sticky lg:top-8">
          <p className="eyebrow">Votre projet</p>
          <h2 className="mt-2 font-serif text-3xl">{visitTitle(property.type)}</h2>
          <p className="mt-3 text-2xl font-semibold text-[#9f7c47]">{property.price}</p>
          <p className="mt-4 text-sm leading-6 text-[#6f6c64]">
            Notre équipe organise une visite privée et répond à chaque question : charges, disponibilité, quartier et modalités de {property.transaction === 'Location' ? 'location' : 'vente'}.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="https://wa.me/21670123456" className="flex items-center justify-center gap-2 rounded-xl bg-[#b69255] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#9f7c47]">
              Écrire sur WhatsApp <ArrowRight size={16} />
            </a>
            <a href="tel:+21670123456" className="flex items-center justify-center gap-2 rounded-xl border border-[#232321]/15 bg-white px-5 py-4 text-sm font-semibold transition hover:bg-[#f8f7f4]">
              <Phone size={15} /> +216 70 123 456
            </a>
          </div>
          <p className="mt-6 text-xs leading-5 text-[#9b9a94]">
            {property.type} · {property.surface} · {property.rooms} · {property.location}
          </p>
        </aside>
      </section>

      <section className="bg-[#ebe7df] px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">En images</p>
          <h2 className="section-title">
            Les volumes,<br />
            <i>la lumière.</i>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {property.gallery?.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${property.title}, vue ${index + 1}`}
                className={`h-64 w-full rounded-2xl object-cover md:h-80 ${index === 0 ? 'sm:col-span-2 md:h-[28rem]' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Le quartier</p>
            <h2 className="section-title">
              {property.location},<br />
              <i>au quotidien.</i>
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#6f6c64]">{property.neighborhood}</p>
        </div>
      </section>

      {others.length > 0 && (
        <section className="border-t border-[#eeeae2] px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Poursuivre la visite</p>
            <h2 className="section-title">
              D&apos;autres biens<br />
              <i>de la sélection.</i>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {others.map((item) => (
                <Link key={item.id} href={`/biens/${item.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(35,35,33,0.05)] transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={item.image} alt={item.title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">{item.transaction}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[#9b9a94]">{item.type} · {item.location}</p>
                    <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                    <p className="mt-3 font-semibold text-[#9f7c47]">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#b69255] px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">Ce bien vous parle ?</p>
            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">
              Organisons<br />
              <i>la visite.</i>
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/21670123456" className="rounded-xl bg-white px-6 py-4 text-center text-sm font-semibold text-[#232321] transition hover:bg-[#f3efe7]">Écrire sur WhatsApp</a>
            <a href="tel:+21670123456" className="rounded-xl border border-white/40 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">Nous appeler</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f8f7f4] px-4 py-4">
      <div className="flex items-center gap-2 text-[#b69255]">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9b9a94]">{label}</span>
      </div>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  )
}
