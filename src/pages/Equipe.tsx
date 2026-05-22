import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Languages } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import { useSEO } from '../hooks/useSEO'

const partners = [
  {
    name: 'Bengu Sulusoglu',
    role: 'Associée · Barreau de Paris',
    slug: 'bengu-sulusoglu',
    email: 'b.sulusoglu@sdavocats.fr',
    expertise: ['Droit commercial', 'Droit des sociétés', 'Contentieux des affaires'],
    languages: 'Français · Anglais · Turc',
    since: 'Avocate depuis 2016',
    img: '/images/howard-bouchevereau-JbpGiafXEi8-unsplash.webp',
  },
  {
    name: 'Antonine Darricau',
    role: 'Associée · Bureau de Rennes',
    slug: 'antonine-darricau',
    email: 'a.darricau@sdavocats.fr',
    expertise: ['Droit commercial', 'Droit du travail', 'Négociation précontentieuse'],
    languages: 'Français · Anglais · Allemand',
    since: 'Cofondatrice — bureau Rennes',
    img: '/images/florian-cario-Ghu8a6_Elw0-unsplash.webp',
  },
]

export default function Equipe() {
  useSEO({
    title: 'Notre équipe — SD Avocats | Bengu Sulusoglu & Antonine Darricau',
    description: 'Découvrez les deux associées de SD Avocats : Bengu Sulusoglu (droit commercial & sociétés, Paris) et Antonine Darricau (droit commercial & travail, Rennes).',
    canonical: 'https://www.sdavocats.fr/notre-equipe',
  })

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#25282b' }}>
          <img
            src="/images/mick-nsenga-9viiXM_2voI-unsplash.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(37,40,43,0.6), rgba(37,40,43,0.95))' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Notre équipe</span>
            </nav>
            <p className="text-xs font-black uppercase mb-4" style={{ color: '#e60000', letterSpacing: '0.15em' }}>Les associées</p>
            <h1
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-1px', maxWidth: '700px' }}
            >
              Notre équipe
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16">
          <div className="max-w-[1400px] mx-auto px-8">
            <p className="text-lg font-light max-w-2xl" style={{ color: '#7e7e7e', lineHeight: '32px', fontWeight: 300 }}>
              SD Avocats réunit deux associées dont les expertises complémentaires couvrent l'ensemble des besoins de leurs clients en droit des affaires et en droit social, à Paris comme à Rennes.
            </p>
          </div>
        </section>

        {/* Partners */}
        <section style={{ backgroundColor: '#f2f2f2' }} className="pb-24">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((p) => (
                <div key={p.slug} className="bg-white overflow-hidden" style={{ borderRadius: '6px' }}>
                  <div className="relative overflow-hidden" style={{ height: '280px' }}>
                    <img
                      src={p.img}
                      alt={`${p.name} — SD Avocats`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(37,40,43,0.7) 0%, transparent 50%)' }}
                    />
                    <div className="absolute bottom-5 left-6">
                      <p className="text-white font-bold text-xl">{p.name}</p>
                      <p className="text-white/60 text-sm">{p.role}</p>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.expertise.map((e) => (
                        <span
                          key={e}
                          className="text-xs font-semibold px-3 py-1"
                          style={{
                            backgroundColor: '#f2f2f2',
                            color: '#25282b',
                            borderRadius: '32px',
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: '#7e7e7e' }}>
                      <Languages size={15} className="shrink-0" />
                      <span>{p.languages}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: '#7e7e7e' }}>
                      <Mail size={15} className="shrink-0" />
                      <a href={`mailto:${p.email}`} className="hover:text-[#e60000] transition-colors">{p.email}</a>
                    </div>
                    <Link
                      to={`/notre-equipe/${p.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#e60000', borderRadius: '60px' }}
                    >
                      Voir le profil complet
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Master — Sorbonne */}
        <section className="bg-white py-20">
          <div className="max-w-[1400px] mx-auto px-8">
            <div
              className="p-10 flex flex-col md:flex-row md:items-center gap-8"
              style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}
            >
              <div
                className="w-14 h-14 rounded-[6px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#e60000' }}
              >
                <span className="text-white font-black text-lg">SD</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase mb-2" style={{ color: '#e60000', letterSpacing: '0.12em' }}>Formation commune</p>
                <p className="font-semibold text-lg mb-1" style={{ color: '#25282b' }}>
                  Master 2 — Université Paris I Panthéon-Sorbonne
                </p>
                <p style={{ color: '#7e7e7e' }}>
                  Droit international privé et du commerce international. Les deux associées partagent la même formation d'excellence et une vision commune de la pratique du droit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
