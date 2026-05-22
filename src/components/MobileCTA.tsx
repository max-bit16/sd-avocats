import { Phone, Mail } from 'lucide-react'

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ backgroundColor: '#e60000' }}
    >
      <div className="flex">
        <a
          href="tel:+33000000000"
          className="flex-1 flex items-center justify-center gap-2.5 py-5 text-white font-medium text-sm border-r border-white/20"
          aria-label="Appeler SD Avocats"
        >
          <Phone size={18} />
          <span>Appeler</span>
        </a>
        <a
          href="mailto:contact@sdavocats.fr"
          className="flex-1 flex items-center justify-center gap-2.5 py-5 text-white font-medium text-sm"
          aria-label="Écrire à SD Avocats"
        >
          <Mail size={18} />
          <span>Écrire</span>
        </a>
      </div>
    </div>
  )
}
