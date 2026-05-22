import { Link } from 'react-router-dom'
import { Scale, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import MobileCTA from '../../components/MobileCTA'
import { useSEO } from '../../hooks/useSEO'

const points = [
  'Litiges civils et commerciaux complexes',
  'Conflits entre associés — droit des sociétés',
  'Phases de négociation et de transaction',
  'Procédures devant les juridictions françaises',
  'Procédures d\'exécution forcée',
]

export default function Contentieux() {
  useSEO({
    title: 'Contentieux & Résolution des litiges — SD Avocats',
    description: 'SD Avocats assiste et représente ses clients en contentieux civils, commerciaux et en droit des sociétés. Stratégies pragmatiques, négociation et procédures judiciaires.',
    canonical: 'https://www.sdavocats.fr/competences/contentieux',
  })

  return (
    <>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#25282b' }}>
          <img
            src="/images/kimi-lee-Dsg--4yCqCI-unsplash.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(37,40,43,0.9) 50%, transparent 100%)' }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to="/competences" className="hover:text-white transition-colors">Compétences</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Contentieux</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-[6px] flex items-center justify-center" style={{ backgroundColor: '#e60000' }}>
                <Scale size={17} className="text-white" />
              </span>
              <p className="text-xs font-black uppercase" style={{ color: '#e60000', letterSpacing: '0.15em' }}>Compétence 01</p>
            </div>
            <h1
              className="text-white font-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-1px', maxWidth: '700px' }}
            >
              Contentieux &<br />Résolution des litiges
            </h1>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-light text-3xl mb-8" style={{ color: '#25282b', fontWeight: 300 }}>
                  Notre approche en matière de contentieux
                </h2>
                <div className="space-y-5 text-base leading-7" style={{ color: '#7e7e7e' }}>
                  <p>
                    SD Avocats assiste et représente ses clients en matière de résolution des litiges et de contentieux civils et commerciaux, ainsi que leurs contentieux en droit des sociétés, notamment en cas de conflits entre associés.
                  </p>
                  <p>
                    Notre approche consiste à définir des stratégies pragmatiques adaptées à chaque différend et aux besoins de chacun de nos clients.
                  </p>
                  <p>
                    SD Avocats représente ses clients à la fois pendant les phases de négociation, de transaction et devant les différentes juridictions françaises. Nous assistons également nos clients dans le cadre des procédures d'exécution forcée.
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
              <Link
                to="/competences"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
                style={{ color: '#7e7e7e' }}
              >
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
