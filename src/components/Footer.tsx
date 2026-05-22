import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#25282b' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-9 h-9 rounded-[6px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#e60000' }}
              >
                <span className="text-white text-sm font-black tracking-tight">SD</span>
              </span>
              <span
                className="text-white text-sm font-bold uppercase tracking-widest"
              >
                Avocats
              </span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mt-4">
              Cabinet indépendant pluridisciplinaire spécialisé en contentieux complexe, droit des affaires et droit social.
            </p>
          </div>

          {/* Compétences */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.1em] mb-5">Compétences</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: '/competences/contentieux', label: 'Contentieux' },
                { to: '/competences/droit-commercial', label: 'Droit commercial' },
                { to: '/competences/droit-des-societes', label: 'Droit des sociétés' },
                { to: '/competences/droit-du-travail', label: 'Droit du travail' },
                { to: '/competences/mobilite-internationale', label: 'Mobilité internationale' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cabinet */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.1em] mb-5">Le cabinet</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: '/notre-equipe', label: 'Notre équipe' },
                { to: '/contact', label: 'Contact' },
                { to: '/mentions-legales', label: 'Mentions légales' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.1em] mb-5">Nous trouver</p>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    7 rue Francisque Sarcey<br />75116 Paris
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    1 rue Raoul Ponchon<br />35000 Rennes
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-white/40 shrink-0" />
                  <a
                    href="mailto:contact@sdavocats.fr"
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    contact@sdavocats.fr
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} SD AVOCATS AARPI — Tous droits réservés
          </p>
          <p className="text-white/20 text-xs">
            Les informations du site ne constituent pas une offre de services.
          </p>
        </div>
      </div>
    </footer>
  )
}
