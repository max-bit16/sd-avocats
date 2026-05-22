import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Briefcase, Building2, Users, Globe, MapPin, Mail } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import { useSEO } from '../hooks/useSEO'

const competences = [
  {
    icon: Scale,
    title: 'Contentieux & Résolution des litiges',
    slug: 'contentieux',
    desc: 'Stratégies pragmatiques adaptées à chaque différend — négociation, transaction, procédures judiciaires.',
    img: '/images/kimi-lee-Dsg--4yCqCI-unsplash.webp',
  },
  {
    icon: Briefcase,
    title: 'Droit Commercial',
    slug: 'droit-commercial',
    desc: 'Rédaction et négociation de contrats commerciaux, gestion des risques et litiges commerciaux.',
    img: '/images/claudio-schwarz-Uja-TBfFpz4-unsplash.webp',
  },
  {
    icon: Building2,
    title: 'Droit des Sociétés',
    slug: 'droit-des-societes',
    desc: 'Création, suivi, cessions et acquisitions. Prévention et gestion des conflits entre associés.',
    img: '/images/denis-sebastian-tamas-HJ7vZTlpmog-unsplash.webp',
  },
  {
    icon: Users,
    title: 'Droit du Travail',
    slug: 'droit-du-travail',
    desc: 'Contrats de travail, gestion sociale quotidienne, procédures de fin de contrat et litiges prud\'homaux.',
    img: '/images/sergiu-valena-E4u_Zo9PET8-unsplash.webp',
  },
  {
    icon: Globe,
    title: 'Mobilité Internationale',
    slug: 'mobilite-internationale',
    desc: 'Organisation de la mobilité internationale des dirigeants et salariés — détachements, autorisations de travail.',
    img: '/images/michael-fousert-Ql9PCaOhyyE-unsplash.webp',
  },
]

export default function Home() {
  useSEO({
    title: 'SD Avocats — Cabinet pluridisciplinaire Paris & Rennes',
    description: 'SD Avocats, cabinet indépendant pluridisciplinaire spécialisé en contentieux complexe, droit des affaires et droit social à Paris (75116) et Rennes (35000).',
    canonical: 'https://www.sdavocats.fr/',
  })

  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section
          className="relative min-h-screen flex flex-col justify-end overflow-hidden"
          style={{ backgroundColor: '#25282b' }}
        >
          {/* Background photo */}
          <img
            src="/images/howard-bouchevereau-JbpGiafXEi8-unsplash.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.35 }}
            fetchPriority="high"
          />
          {/* Gradient overlay — darkens bottom for text readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(37,40,43,0.3) 0%, rgba(37,40,43,0.7) 60%, rgba(37,40,43,0.95) 100%)' }}
          />

          {/* Hero content */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-20 pt-32 w-full">
            {/* Eyebrow */}
            <p
              className="text-white/60 text-sm font-black uppercase mb-6"
              style={{ letterSpacing: '0.15em' }}
            >
              Cabinet pluridisciplinaire · Paris & Rennes
            </p>

            {/* H1 */}
            <h1
              className="text-white font-black uppercase leading-none mb-8"
              style={{
                fontSize: 'clamp(56px, 9vw, 112px)',
                letterSpacing: '-1px',
                maxWidth: '900px',
              }}
            >
              Droit
              <br />
              des affaires.
            </h1>

            {/* Sub */}
            <p
              className="text-white/70 mb-10 max-w-lg"
              style={{ fontSize: '18px', fontWeight: 300, lineHeight: '28px' }}
            >
              SD Avocats assiste ses clients en contentieux complexe, conseil en droit des affaires et droit social. Solutions pragmatiques, sur-mesure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/competences"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium text-base transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: '#e60000', borderRadius: '60px', fontSize: '16px' }}
              >
                Nos compétences
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium text-base border border-white/40 hover:border-white/70 transition-colors duration-150"
                style={{ borderRadius: '60px', fontSize: '16px' }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT BAND */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-black uppercase mb-6"
                  style={{ color: '#e60000', letterSpacing: '0.15em' }}
                >
                  Le cabinet
                </p>
                <h2
                  className="font-light leading-tight mb-8"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: '#25282b' }}
                >
                  Un accompagnement sur-mesure pour vos enjeux juridiques
                </h2>
                <p className="mb-6" style={{ fontSize: '18px', color: '#7e7e7e', lineHeight: '28px' }}>
                  SD Avocats est un cabinet indépendant pluridisciplinaire, basé à Paris et à Rennes. Notre approche : définir des stratégies pragmatiques adaptées aux besoins de chacun de nos clients.
                </p>
                <p style={{ fontSize: '18px', color: '#7e7e7e', lineHeight: '28px' }}>
                  Nous accompagnons nos clients dans leurs projets d'investissement comme dans leurs litiges — avec une attention constante à l'efficacité et à la confidentialité.
                </p>
                <div className="mt-10">
                  <Link
                    to="/notre-equipe"
                    className="inline-flex items-center gap-2 font-medium text-base transition-colors duration-150"
                    style={{ color: '#e60000', fontSize: '16px' }}
                  >
                    Notre équipe
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Stats / visual */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: '2016', label: 'Fondé à Paris', sub: 'par Bengu Sulusoglu' },
                  { n: '5', label: 'Domaines de compétences', sub: 'droit des affaires' },
                  { n: '2', label: 'Bureaux en France', sub: 'Paris & Rennes' },
                  { n: '3', label: 'Langues pratiquées', sub: 'FR · EN · DE / TR' },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="p-6"
                    style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}
                  >
                    <p
                      className="font-black leading-none mb-2"
                      style={{ fontSize: '40px', color: '#25282b', letterSpacing: '-1px' }}
                    >
                      {s.n}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#25282b' }}>{s.label}</p>
                    <p className="text-xs mt-1" style={{ color: '#7e7e7e' }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPETENCES BAND */}
        <section style={{ backgroundColor: '#f2f2f2' }} className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <p
                  className="text-xs font-black uppercase mb-4"
                  style={{ color: '#e60000', letterSpacing: '0.15em' }}
                >
                  Expertise
                </p>
                <h2
                  className="font-light leading-tight"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#25282b' }}
                >
                  Nos domaines de compétences
                </h2>
              </div>
              <Link
                to="/competences"
                className="inline-flex items-center gap-2 shrink-0 font-medium text-sm transition-colors duration-150"
                style={{ color: '#e60000' }}
              >
                Voir tout
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {competences.map((c) => {
                const Icon = c.icon
                return (
                  <Link
                    key={c.slug}
                    to={`/competences/${c.slug}`}
                    className="group block bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ borderRadius: '6px' }}
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={c.img}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(37,40,43,0.5) 0%, transparent 60%)' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: '#e60000' }}
                        >
                          <Icon size={15} className="text-white" />
                        </span>
                        <h3 className="text-sm font-bold leading-tight" style={{ color: '#25282b' }}>
                          {c.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#7e7e7e' }}>
                        {c.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium" style={{ color: '#e60000' }}>
                        En savoir plus
                        <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* TEAM BAND */}
        <section style={{ backgroundColor: '#25282b' }} className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <p
                  className="text-xs font-black uppercase mb-4"
                  style={{ color: '#e60000', letterSpacing: '0.15em' }}
                >
                  Notre équipe
                </p>
                <h2
                  className="font-light leading-tight text-white"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300 }}
                >
                  Deux associées, deux expertises
                </h2>
              </div>
              <Link
                to="/notre-equipe"
                className="inline-flex items-center gap-2 shrink-0 font-medium text-sm transition-colors duration-150 text-white/60 hover:text-white"
              >
                Voir les profils
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Bengu Sulusoglu',
                  role: 'Associée · Barreau de Paris',
                  lang: 'FR · EN · TR',
                  expertise: 'Droit commercial & Droit des sociétés',
                  email: 'b.sulusoglu@sdavocats.fr',
                  slug: 'bengu-sulusoglu',
                },
                {
                  name: 'Antonine Darricau',
                  role: 'Associée · Bureau de Rennes',
                  lang: 'FR · EN · DE',
                  expertise: 'Droit commercial & Droit du travail',
                  email: 'a.darricau@sdavocats.fr',
                  slug: 'antonine-darricau',
                },
              ].map((p) => (
                <div
                  key={p.slug}
                  className="relative overflow-hidden p-8 flex flex-col justify-between"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', minHeight: '260px' }}
                >
                  {/* SD orb accent */}
                  <div
                    className="absolute top-6 right-6 w-10 h-10 rounded-[6px] flex items-center justify-center"
                    style={{ backgroundColor: '#e60000' }}
                  >
                    <span className="text-white text-xs font-black">SD</span>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.1em] mb-2">{p.role}</p>
                    <h3 className="text-white font-bold text-2xl mb-1">{p.name}</h3>
                    <p className="text-white/50 text-sm mb-4">{p.expertise}</p>
                    <p
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block"
                      style={{
                        color: '#7e7e7e',
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        borderRadius: '32px',
                      }}
                    >
                      {p.lang}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to={`/notre-equipe/${p.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-medium text-sm transition-colors duration-150 border border-white/30 hover:border-white/70"
                      style={{ borderRadius: '60px' }}
                    >
                      Profil complet
                      <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`mailto:${p.email}`}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-150"
                    >
                      {p.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICES BAND */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-14">
              <p
                className="text-xs font-black uppercase mb-4"
                style={{ color: '#e60000', letterSpacing: '0.15em' }}
              >
                Implantation
              </p>
              <h2
                className="font-light"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#25282b' }}
              >
                Deux bureaux, une équipe
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Paris */}
              <div className="relative overflow-hidden" style={{ borderRadius: '6px' }}>
                <img
                  src="/images/mick-nsenga-9viiXM_2voI-unsplash.webp"
                  alt="Paris — bureau SD Avocats"
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8" style={{ backgroundColor: '#f2f2f2' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#e60000' }}
                    >
                      <MapPin size={12} className="text-white" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.12em]" style={{ color: '#25282b' }}>
                      Paris · 75116
                    </span>
                  </div>
                  <p className="font-bold text-lg mb-1" style={{ color: '#25282b' }}>Bureau principal</p>
                  <p className="text-sm" style={{ color: '#7e7e7e' }}>7 rue Francisque Sarcey, 75116 Paris</p>
                  <a
                    href="https://maps.google.com/?q=7+rue+Francisque+Sarcey+75116+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors duration-150"
                    style={{ color: '#e60000' }}
                  >
                    Voir sur Maps
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Rennes */}
              <div className="relative overflow-hidden" style={{ borderRadius: '6px' }}>
                <img
                  src="/images/florian-cario-Ghu8a6_Elw0-unsplash.webp"
                  alt="Rennes — bureau SD Avocats"
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8" style={{ backgroundColor: '#f2f2f2' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#e60000' }}
                    >
                      <MapPin size={12} className="text-white" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.12em]" style={{ color: '#25282b' }}>
                      Rennes · 35000
                    </span>
                  </div>
                  <p className="font-bold text-lg mb-1" style={{ color: '#25282b' }}>Bureau de Rennes</p>
                  <p className="text-sm" style={{ color: '#7e7e7e' }}>1 rue Raoul Ponchon, 35000 Rennes</p>
                  <a
                    href="https://maps.google.com/?q=1+rue+Raoul+Ponchon+35000+Rennes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors duration-150"
                    style={{ color: '#e60000' }}
                  >
                    Voir sur Maps
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section style={{ backgroundColor: '#25282b' }} className="py-24">
          <div className="max-w-[1400px] mx-auto px-8 text-center">
            {/* SD Orb */}
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-[6px] mb-8"
              style={{ backgroundColor: '#e60000' }}
            >
              <span className="text-white font-black text-lg">SD</span>
            </div>
            <h2
              className="text-white font-light mb-6 mx-auto"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, maxWidth: '600px' }}
            >
              Prenez contact avec notre équipe
            </h2>
            <p className="text-white/50 mb-10 mx-auto" style={{ maxWidth: '480px', lineHeight: '28px' }}>
              Nos avocates sont disponibles pour analyser votre situation et vous proposer une approche adaptée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@sdavocats.fr"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium text-base transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: '#e60000', borderRadius: '60px', fontSize: '16px' }}
              >
                <Mail size={18} />
                contact@sdavocats.fr
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium text-base border border-white/30 hover:border-white/60 transition-colors duration-150"
                style={{ borderRadius: '60px', fontSize: '16px' }}
              >
                Infos & adresses
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
