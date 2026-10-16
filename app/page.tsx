'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { properties } from '@/lib/properties'

export default function Page() {
  const [activeTransaction, setActiveTransaction] = useState('Vente')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Tous les types')
  const [showAll, setShowAll] = useState(false)

  const filteredProperties = useMemo(() => properties.filter((property) => {
    const matchesLocation = !location || property.location.toLowerCase().includes(location.toLowerCase())
    const matchesType = type === 'Tous les types' || property.type === type
    const matchesTransaction = property.transaction === activeTransaction
    return matchesLocation && matchesType && matchesTransaction
  }), [activeTransaction, location, type])

  const visibleProperties = showAll ? filteredProperties : filteredProperties.slice(0, 3)

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#232321]">
      <SiteHeader />

      <section id="accueil" className="relative flex min-h-[720px] items-end overflow-hidden bg-[#333] pb-32 pt-40">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" alt="Villa contemporaine baignée de lumière" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl text-white">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b87b]"><span className="h-px w-10 bg-[#d6b87b]" /> Immobilier d&apos;exception en Tunisie</p>
            <h1 className="font-serif text-5xl leading-[1.02] md:text-7xl">Trouvez le bien<br /><i className="font-normal text-[#d6b87b]">qui vous correspond.</i></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/75">Découvrez notre sélection d&apos;appartements, de villas, de terrains et de locaux commerciaux en Tunisie.</p>
          </div>
          <div className="mt-12 rounded-2xl bg-white p-3 shadow-2xl shadow-black/20 md:p-4">
            <div className="flex gap-5 border-b border-[#e9e6df] px-2 pb-3 text-sm font-semibold">
              {['Vente', 'Location'].map((item) => <button key={item} onClick={() => setActiveTransaction(item)} className={`relative pb-2 transition-colors ${activeTransaction === item ? 'text-[#232321]' : 'text-[#9b9a94]'}`}>{item}{activeTransaction === item && <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#b69255]" />}</button>)}
            </div>
            <div className="grid gap-3 pt-4 md:grid-cols-[1.2fr_1fr_1fr_auto]">
              <label className="flex items-center gap-3 rounded-xl bg-[#f6f5f1] px-4 py-3"><MapPin size={17} className="text-[#a28355]" /><span className="flex flex-1 flex-col"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#9b9a94]">Localisation</span><input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Ville, quartier..." spellCheck={false} suppressHydrationWarning className="mt-1 bg-transparent text-sm outline-none placeholder:text-[#77756f]" /></span></label>
              <label className="flex items-center gap-3 rounded-xl bg-[#f6f5f1] px-4 py-3"><Building2 size={17} className="text-[#a28355]" /><span className="flex flex-1 flex-col"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#9b9a94]">Type de bien</span><select value={type} onChange={(event) => setType(event.target.value)} className="mt-1 appearance-none bg-transparent text-sm outline-none"><option>Tous les types</option><option>Appartement</option><option>Villa</option><option>Maison</option></select></span><ChevronDown size={15} /></label>
              <div className="flex items-center gap-3 rounded-xl bg-[#f6f5f1] px-4 py-3"><span className="text-[#a28355]">TND</span><span className="flex flex-1 flex-col"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#9b9a94]">Budget maximum</span><select className="mt-1 appearance-none bg-transparent text-sm outline-none"><option>Sans limite</option><option>500 000 TND</option><option>1 000 000 TND</option></select></span></div>
              <Button onClick={() => document.getElementById('biens')?.scrollIntoView({ behavior: 'smooth' })} className="h-auto rounded-xl bg-[#b69255] px-7 py-4 text-sm font-semibold text-white hover:bg-[#9f7c47]"><Search data-icon="inline-start" /> Rechercher</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="biens" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Notre sélection</p><h2 className="section-title">Des lieux à la hauteur<br /><i>de vos projets.</i></h2></div><a href="#biens" onClick={() => setShowAll(true)} className="group flex items-center gap-2 text-sm font-semibold">Voir tous les biens <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></div>
        {visibleProperties.length === 0 ? <div className="rounded-2xl border border-dashed border-[#d4d0c6] p-16 text-center text-[#77756f]">Aucun bien ne correspond à votre recherche.</div> : <div className="grid gap-6 md:grid-cols-3">{visibleProperties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>}
      </section>

      <section className="bg-[#ebe7df] px-5 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="eyebrow">Notre accompagnement</p><h2 className="section-title">Plus qu&apos;un bien,<br /><i>un nouveau chapitre.</i></h2><p className="mt-6 max-w-md leading-7 text-[#6f6c64]">De la première visite à la remise des clés, notre équipe vous accompagne avec écoute, expertise et discrétion.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-[#b69255] pb-2 text-sm font-semibold">Découvrir notre agence <ArrowRight size={16} /></a></div><div className="grid gap-4 sm:grid-cols-2"><Service icon={<Users />} title="Conseil sur mesure" text="Une approche personnalisée pour chaque projet de vie." /><Service icon={<ShieldCheck />} title="Expertise locale" text="Une connaissance fine des marchés tunisiens." /><Service icon={<Star />} title="Exigence & confiance" text="Des biens sélectionnés avec le plus grand soin." /><Service icon={<Phone />} title="Disponibilité" text="Une équipe à vos côtés, à chaque étape." /></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center"><div className="relative"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Salon élégant d'une propriété" className="h-[460px] w-full rounded-2xl object-cover" /><div className="absolute -bottom-8 -right-3 rounded-xl bg-[#232321] px-7 py-5 text-white shadow-xl sm:-right-8"><p className="font-serif text-3xl text-[#d6b87b]">12+</p><p className="mt-1 text-xs uppercase tracking-wider text-white/60">années d&apos;expertise</p></div></div><div><p className="eyebrow">Pourquoi Maison & Co</p><h2 className="section-title">L&apos;immobilier,<br /><i>autrement.</i></h2><div className="mt-8 flex flex-col gap-5">{['Une sélection exigeante de biens singuliers', 'Une connaissance authentique du marché tunisien', 'Un accompagnement humain, transparent et attentif'].map((item) => <div key={item} className="flex items-center gap-3 text-sm"><span className="flex size-6 items-center justify-center rounded-full bg-[#e5d8bf] text-[#9f7c47]"><Check size={14} /></span>{item}</div>)}</div></div></div></section>

      <section className="bg-[#232321] px-5 py-24 text-white lg:px-10"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow text-[#d6b87b]">Ils nous font confiance</p><blockquote className="mt-7 font-serif text-3xl leading-tight md:text-5xl">“Une équipe d&apos;une rare écoute, qui a su transformer notre recherche en une magnifique aventure.”</blockquote><div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/65"><span className="flex size-9 items-center justify-center rounded-full bg-[#b69255] font-serif text-white">AM</span> Amel & Mehdi <span className="text-[#d6b87b]">★★★★★</span></div></div></section>

      <section id="contact" className="bg-[#b69255] px-5 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">Un projet en tête ?</p><h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Parlons de votre<br /><i>prochain chez-vous.</i></h2></div><div className="flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/21670123456" className="rounded-xl bg-white px-6 py-4 text-center text-sm font-semibold text-[#232321] transition hover:bg-[#f3efe7]">Écrire sur WhatsApp</a><a href="tel:+21670123456" className="rounded-xl border border-white/40 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">Nous appeler</a></div></div></section>

      <SiteFooter />
    </main>
  )
}

function PropertyCard({ property }: { property: (typeof properties)[number] }) {
  const cardClass = 'group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(35,35,33,0.05)] outline-none transition hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#b69255]'

  const media = (
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={property.image} alt={property.title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">{property.transaction}</div>
    </div>
  )

  const body = (
    <div className="p-5">
      <p className="text-xs text-[#9b9a94]">{property.type} · {property.location}</p>
      <h3 className="mt-2 font-serif text-xl">{property.title}</h3>
      <p className="mt-4 text-lg font-semibold text-[#9f7c47]">{property.price}</p>
      <div className="mt-4 flex gap-5 border-t border-[#eeeae2] pt-4 text-xs text-[#77756f]">
        <span className="flex items-center gap-1.5"><Building2 size={14} /> {property.surface}</span>
        <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.rooms}</span>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#9f7c47]">Voir la fiche <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></p>
    </div>
  )

  return (
    <article className={cardClass}>
      <Link href={`/biens/${property.id}`} className="block outline-none">
        {media}
        {body}
      </Link>
      <button aria-label={`Ajouter ${property.title} aux favoris`} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2.5 transition hover:bg-white"><Heart size={16} /></button>
    </article>
  )
}

function Service({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="rounded-2xl bg-[#f8f7f4] p-6"><div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#e5d8bf] text-[#9f7c47]">{icon}</div><h3 className="font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#77756f]">{text}</p></div>
}
