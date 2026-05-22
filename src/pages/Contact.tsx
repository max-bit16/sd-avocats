import { Link } from 'react-router-dom'
import { MapPin, Mail, ExternalLink } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import { useSEO } from '../hooks/useSEO'

export default function Contact() {
  useSEO({
    title: 'Contact — SD Avocats Paris & Rennes',
    description: 'Contactez SD Avocats : cabinet à Paris (75116) et Rennes (35000). Email : contact@sdavocats.fr. Accueil sur rendez-vous.',
    canonical: 'https://www.sdavocats.fr/contact',
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
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(37,40,43,0.5), rgba(37,40,43,0.95))' }} />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Contact</span>
            </nav>
            <p className="text-xs font-black uppercase mb-4" style={{ color: '#e60000', letterSpacing: '0.15em' }}>Nous joindre</p>
            <h1
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-1px', maxWidth: '700px' }}
            >
              Contact
            </h1>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-8">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* General email */}
              <div
                className="p-8 flex flex-col"
                style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}
              >
                <div
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#e60000' }}
                >
                  <Mail size={18} className="text-white" />
                </div>
                <p className="text-xs font-black uppercase mb-3" style={{ color: '#e60000', letterSpacing: '0.12em' }}>Email général</p>
                <p className="font-semibold text-lg mb-2" style={{ color: '#25282b' }}>contact@sdavocats.fr</p>
                <p className="text-sm mb-6" style={{ color: '#7e7e7e' }}>Pour toute demande générale. Réponse sous 48h ouvrées.</p>
                <a
                  href="mailto:contact@sdavocats.fr"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#e60000', borderRadius: '60px' }}
                >
                  Envoyer un email
                  <Mail size={15} />
                </a>
              </div>

              {/* Paris */}
              <div
                className="p-8 flex flex-col"
                style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}
              >
                <div
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#25282b' }}
                >
                  <MapPin size={18} className="text-white" />
                </div>
                <p className="text-xs font-black uppercase mb-3" style={{ color: '#e60000', letterSpacing: '0.12em' }}>Bureau Paris</p>
                <p className="font-semibold text-lg mb-1" style={{ color: '#25282b' }}>Paris · 75116</p>
                <p className="text-sm mb-2" style={{ color: '#7e7e7e' }}>7 rue Francisque Sarcey<br />75116 Paris</p>
                <a
                  href="mailto:b.sulusoglu@sdavocats.fr"
                  className="text-sm mt-1 mb-6"
                  style={{ color: '#7e7e7e' }}
                >
                  b.sulusoglu@sdavocats.fr
                </a>
                <a
                  href="https://maps.google.com/?q=7+rue+Francisque+Sarcey+75116+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border transition-colors duration-150"
                  style={{ borderRadius: '60px', color: '#25282b', borderColor: '#25282b' }}
                >
                  Voir sur Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Rennes */}
              <div
                className="p-8 flex flex-col"
                style={{ backgroundColor: '#f2f2f2', borderRadius: '6px' }}
              >
                <div
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#25282b' }}
                >
                  <MapPin size={18} className="text-white" />
                </div>
                <p className="text-xs font-black uppercase mb-3" style={{ color: '#e60000', letterSpacing: '0.12em' }}>Bureau Rennes</p>
                <p className="font-semibold text-lg mb-1" style={{ color: '#25282b' }}>Rennes · 35000</p>
                <p className="text-sm mb-2" style={{ color: '#7e7e7e' }}>1 rue Raoul Ponchon<br />35000 Rennes</p>
                <a
                  href="mailto:a.darricau@sdavocats.fr"
                  className="text-sm mt-1 mb-6"
                  style={{ color: '#7e7e7e' }}
                >
                  a.darricau@sdavocats.fr
                </a>
                <a
                  href="https://maps.google.com/?q=1+rue+Raoul+Ponchon+35000+Rennes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border transition-colors duration-150"
                  style={{ borderRadius: '60px', color: '#25282b', borderColor: '#25282b' }}
                >
                  Voir sur Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Associates direct */}
            <div>
              <p className="text-xs font-black uppercase mb-8" style={{ color: '#e60000', letterSpacing: '0.15em' }}>Contacter directement une associée</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Bengu Sulusoglu', role: 'Droit commercial & Sociétés · Paris', email: 'b.sulusoglu@sdavocats.fr' },
                  { name: 'Antonine Darricau', role: 'Droit commercial & Travail · Rennes', email: 'a.darricau@sdavocats.fr' },
                ].map((p) => (
                  <div
                    key={p.email}
                    className="flex items-center justify-between p-6 border border-[#f2f2f2]"
                    style={{ borderRadius: '6px' }}
                  >
                    <div>
                      <p className="font-semibold" style={{ color: '#25282b' }}>{p.name}</p>
                      <p className="text-sm mt-1" style={{ color: '#7e7e7e' }}>{p.role}</p>
                    </div>
                    <a
                      href={`mailto:${p.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium hover:opacity-90 transition-opacity shrink-0 ml-4"
                      style={{ backgroundColor: '#e60000', borderRadius: '60px' }}
                    >
                      <Mail size={14} />
                      Écrire
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-12 text-sm text-center" style={{ color: '#bebebe' }}>
              Les informations transmises via ce site ne constituent pas une consultation juridique. Accueil sur rendez-vous uniquement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
