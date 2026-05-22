import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Briefcase, Building2, Users, Globe } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import { useSEO } from '../hooks/useSEO'

const areas = [
  {
    icon: Scale,
    title: 'Contentieux & Résolution des litiges',
    slug: 'contentieux',
    desc: 'Assistance et représentation en matière de litiges civils, commerciaux et en droit des sociétés. Stratégies pragmatiques en négociation, transaction et procédures judiciaires.',
    img: '/images/kimi-lee-Dsg--4yCqCI-unsplash.webp',
  },
  {
    icon: Briefcase,
    title: 'Droit Commercial',
    slug: 'droit-commercial',
    desc: 'Conseil et représentation pour la négociation et la rédaction de contrats commerciaux, la gestion des risques et les litiges avec des partenaires commerciaux.',
    img: '/images/claudio-schwarz-Uja-TBfFpz4-unsplash.webp',
  },
  {
    icon: Building2,
    title: 'Droit des Sociétés',
    slug: 'droit-des-societes',
    desc: 'Accompagnement dans toutes les étapes de la vie des sociétés : création, suivi, cessions, acquisitions et gestion des conflits entre associés.',
    img: '/images/denis-sebastian-tamas-HJ7vZTlpmog-unsplash.webp',
  },
  {
    icon: Users,
    title: 'Droit du Travail',
    slug: 'droit-du-travail',
    desc: 'Conseil en droit social au quotidien, rédaction de contrats de travail, gestion des fins de contrats et représentation devant les juridictions prud\'homales.',
    img: '/images/sergiu-valena-E4u_Zo9PET8-unsplash.webp',
  },
  {
    icon: Globe,
    title: 'Mobilité Internationale',
    slug: 'mobilite-internationale',
    desc: 'Organisation et mise en place de la mobilité internationale — détachements, autorisations de travail, titres de séjour et formalités administratives.',
    img: '/images/michael-fousert-Ql9PCaOhyyE-unsplash.webp',
  },
]

export default function Competences() {
  useSEO({
    title: 'Compétences — SD Avocats | Droit des affaires & Droit social',
    description: 'Contentieux, droit commercial, droit des sociétés, droit du travail et mobilité internationale. Les 5 domaines d\'expertise de SD Avocats à Paris et Rennes.',
    canonical: 'https://www.sdavocats.fr/competences',
  })

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ backgroundColor: '#25282b' }}
        >
          <img
            src="/images/claudio-schwarz-Uja-TBfFpz4-unsplash.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.12 }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8" aria-label="Fil d'Ariane">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Compétences</span>
            </nav>
            <p className="text-xs font-black uppercase mb-4" style={{ color: '#e60000', letterSpacing: '0.15em' }}>
              Nos domaines
            </p>
            <h1
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-1px', maxWidth: '700px' }}
            >
              Compétences
            </h1>
          </div>
        </section>

        {/* Areas list */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col gap-8">
              {areas.map((a, i) => {
                const Icon = a.icon
                return (
                  <Link
                    key={a.slug}
                    to={`/competences/${a.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-0 overflow-hidden border border-[#f2f2f2] hover:border-[#e60000]/20 transition-colors duration-200"
                    style={{ borderRadius: '6px' }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden md:w-56 h-48 md:h-auto">
                      <img
                        src={a.img}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: '#e60000' }}
                        >
                          <Icon size={15} className="text-white" />
                        </span>
                        <span
                          className="text-xs font-black uppercase"
                          style={{ color: '#bebebe', letterSpacing: '0.1em' }}
                        >
                          Compétence 0{i + 1}
                        </span>
                      </div>
                      <h2 className="font-bold text-xl mb-3" style={{ color: '#25282b' }}>
                        {a.title}
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: '#7e7e7e', maxWidth: '560px' }}>
                        {a.desc}
                      </p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden md:flex items-center px-8">
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-150 group-hover:translate-x-1"
                        style={{ color: '#e60000' }}
                      />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
