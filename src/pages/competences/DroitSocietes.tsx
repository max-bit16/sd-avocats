import { Link } from 'react-router-dom'
import { Building2, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import MobileCTA from '../../components/MobileCTA'
import { useSEO } from '../../hooks/useSEO'

const points = [
  'Création et suivi de structures sociétaires',
  'Projets de cession et d\'acquisition',
  'Négociation avec associés et futurs associés',
  'Documentation contractuelle et actes de droit des sociétés',
  'Prévention et gestion des conflits entre associés',
]

export default function DroitSocietes() {
  useSEO({
    title: 'Droit des Sociétés — SD Avocats Paris & Rennes',
    description: 'SD Avocats accompagne ses clients dans toutes les étapes de la vie de leurs sociétés : création, cessions, acquisitions et gestion des conflits entre associés.',
    canonical: 'https://www.sdavocats.fr/competences/droit-des-societes',
  })

  return (
    <>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#25282b' }}>
          <img
            src="/images/denis-sebastian-tamas-HJ7vZTlpmog-unsplash.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(37,40,43,0.9) 50%, transparent 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to="/competences" className="hover:text-white transition-colors">Compétences</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Droit des sociétés</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-[6px] flex items-center justify-center" style={{ backgroundColor: '#e60000' }}>
                <Building2 size={17} className="text-white" />
              </span>
              <p className="text-xs font-black uppercase" style={{ color: '#e60000', letterSpacing: '0.15em' }}>Compétence 03</p>
            </div>
            <h1
              className="text-white font-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-1px', maxWidth: '700px' }}
            >
              Droit des<br />Sociétés
            </h1>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-light text-3xl mb-8" style={{ color: '#25282b', fontWeight: 300 }}>
                  Accompagnement tout au long de la vie de votre société
                </h2>
                <div className="space-y-5 text-base leading-7" style={{ color: '#7e7e7e' }}>
                  <p>
                    SD Avocats assiste ses clients dans toutes les étapes de la vie de leurs sociétés, à la fois dans la création de leur structure et leur suivi, et dans le cadre de leurs projets de cession et d'acquisition.
                  </p>
                  <p>
                    Nous conseillons et représentons nos clients dans les phases de négociation vis-à-vis de leurs associés et futurs associés. Le cabinet rédige la documentation contractuelle et les actes de droit des sociétés afin d'éviter les futurs conflits.
                  </p>
                  <p>
                    SD Avocats conseille également ses clients pour la gestion des conflits entre associés, depuis les phases précontentieuses jusqu'aux procédures judiciaires si nécessaire.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase mb-6" style={{ color: '#e60000', letterSpacing: '0.12em' }}>Domaines couverts</p>
                <ul className="space-y-4">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: '#e60000' }} />
                      <span className="text-base" style={{ color: '#25282b' }}>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <a
                    href="mailto:contact@sdavocats.fr"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium text-base hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#e60000', borderRadius: '60px' }}
                  >
                    Nous contacter
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-[#f2f2f2]">
              <Link to="/competences" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#7e7e7e' }}>
                <ArrowLeft size={15} />
                Toutes nos compétences
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
