import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import { useSEO } from '../hooks/useSEO'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-semibold text-base mb-4" style={{ color: '#25282b' }}>{title}</h2>
      <div className="text-sm leading-7 space-y-3" style={{ color: '#7e7e7e' }}>
        {children}
      </div>
    </div>
  )
}

export default function MentionsLegales() {
  useSEO({
    title: 'Mentions légales — SD Avocats AARPI',
    description: 'Mentions légales de SD Avocats AARPI, 7 rue Francisque Sarcey, 75116 Paris. Hébergement O2Switch. Données personnelles & RGPD.',
    canonical: 'https://www.sdavocats.fr/mentions-legales',
  })

  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-16" style={{ backgroundColor: '#25282b' }}>
          <div className="max-w-[1400px] mx-auto px-8">
            <nav className="text-sm text-white/40 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Mentions légales</span>
            </nav>
            <h1
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-1px' }}
            >
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-[860px] mx-auto px-8">

            <Section title="Éditeur du site">
              <p><strong style={{ color: '#25282b' }}>SD AVOCATS AARPI</strong></p>
              <p>7 rue Francisque Sarcey, 75116 Paris</p>
              <p>
                Email :{' '}
                <a href="mailto:contact@sdavocats.fr" style={{ color: '#e60000' }}>
                  contact@sdavocats.fr
                </a>
              </p>
              <p>Forme juridique : Association d'avocats à responsabilité professionnelle individuelle (AARPI)</p>
            </Section>

            <Section title="Hébergement">
              <p>O2Switch — 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
            </Section>

            <Section title="Conception & développement">
              <p>Conception et développement du site : Baris Celik</p>
            </Section>

            <Section title="Objet du site">
              <p>
                Les informations contenues sur ce site ne constituent pas une offre de services juridiques, ni une recommandation ou une sollicitation de services. Elles ont un caractère général et ne sauraient se substituer à une consultation personnalisée.
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                Le site et l'ensemble de ses éléments (textes, visuels, structure) sont la propriété exclusive de SD AVOCATS AARPI. Toute reproduction, totale ou partielle, est interdite sans autorisation préalable écrite.
              </p>
            </Section>

            <Section title="Données personnelles & RGPD">
              <p>
                Les données personnelles collectées via ce site sont utilisées uniquement pour mesurer le volume de visites et gérer les messages adressés via l'onglet Contact.
              </p>
              <p>
                Leur traitement est conforme à la loi du 6 janvier 1978 (Loi Informatique et Libertés) et au Règlement Général sur la Protection des Données (RGPD, n° 679/2016).
              </p>
              <p>Les données ne sont ni cédées ni louées à des tiers.</p>
              <p>
                Responsable du traitement : SD AVOCATS AARPI, 7 rue Francisque Sarcey, 75116 Paris —{' '}
                <a href="mailto:contact@sdavocats.fr" style={{ color: '#e60000' }}>contact@sdavocats.fr</a>
              </p>
              <p>
                Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données, que vous pouvez exercer par email à l'adresse ci-dessus.
              </p>
            </Section>

            <Section title="Loi applicable">
              <p>Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence exclusive des juridictions françaises, en langue française.</p>
            </Section>

          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
