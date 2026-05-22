import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Languages, GraduationCap, Briefcase } from 'lucide-react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import MobileCTA from '../../components/MobileCTA'
import { useSEO } from '../../hooks/useSEO'

export default function Bengu() {
  useSEO({
    title: 'Bengu Sulusoglu — Associée, SD Avocats Paris',
    description: 'Bengu Sulusoglu, avocate au Barreau de Paris depuis 2016. Spécialiste en droit commercial, droit des sociétés et contentieux des affaires. Langues : FR, EN, TR.',
    canonical: 'https://www.sdavocats.fr/notre-equipe/bengu-sulusoglu',
  })

  return (
    <>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#25282b' }}>
          <img
            src="/images/howard-bouchevereau-JbpGiafXEi8-unsplash.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(37,40,43,0.92) 55%, transparent 100%)' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to="/notre-equipe" className="hover:text-white transition-colors">Notre équipe</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Bengu Sulusoglu</span>
            </nav>
            <p className="text-xs font-black uppercase mb-4" style={{ color: '#e60000', letterSpacing: '0.15em' }}>
              Associée · Barreau de Paris
            </p>
            <h1
              className="text-white font-black uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-1px' }}
            >
              Bengu<br />Sulusoglu
            </h1>
            <a
              href="mailto:b.sulusoglu@sdavocats.fr"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mt-2"
            >
              <Mail size={15} />
              b.sulusoglu@sdavocats.fr
            </a>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
              <div>
                <h2 className="font-light text-2xl mb-8" style={{ color: '#25282b', fontWeight: 300 }}>
                  Parcours
                </h2>
                <div className="space-y-5 text-base leading-7" style={{ color: '#7e7e7e' }}>
                  <p>
                    Avocate au Barreau de Paris depuis <strong style={{ color: '#25282b' }}>février 2016</strong>, Bengu Sulusoglu intervient en droit commercial et en droit des sociétés tant en conseil qu'en contentieux des affaires.
                  </p>
                  <p>
                    Elle mène les phases de négociation ainsi que les procédures devant les juridictions civiles et commerciales. Bengu Sulusoglu accompagne également les investisseurs français et étrangers dans le cadre de leurs différents projets.
                  </p>
                  <p>
                    Avant de fonder SD Avocats, elle a exercé son activité au sein de cabinets parisiens spécialisés en droit des affaires.
                  </p>
                </div>

                <div className="mt-12">
                  <a
                    href="mailto:b.sulusoglu@sdavocats.fr"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#e60000', borderRadius: '60px', fontSize: '16px' }}
                  >
                    <Mail size={18} />
                    Écrire à Bengu Sulusoglu
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-5">
                <div className="p-6" style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <GraduationCap size={17} style={{ color: '#e60000' }} />
                    <p className="text-xs font-black uppercase" style={{ color: '#e60000', letterSpacing: '0.1em' }}>Formation</p>
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#25282b' }}>
                    Master 2 — Droit international privé et du commerce international
                  </p>
                  <p className="text-sm" style={{ color: '#7e7e7e' }}>Université Paris I Panthéon-Sorbonne</p>
                </div>

                <div className="p-6" style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Briefcase size={17} style={{ color: '#e60000' }} />
                    <p className="text-xs font-black uppercase" style={{ color: '#e60000', letterSpacing: '0.1em' }}>Domaines</p>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: '#25282b' }}>
                    {['Droit commercial', 'Droit des sociétés', 'Contentieux des affaires', 'Accompagnement investisseurs'].map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#e60000' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6" style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Languages size={17} style={{ color: '#e60000' }} />
                    <p className="text-xs font-black uppercase" style={{ color: '#e60000', letterSpacing: '0.1em' }}>Langues</p>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#25282b' }}>Français · Anglais · Turc</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[#f2f2f2]">
              <Link to="/notre-equipe" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#7e7e7e' }}>
                <ArrowLeft size={15} />
                Notre équipe
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
