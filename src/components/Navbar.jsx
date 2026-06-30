const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto w-full border-b border-slate-800/90 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="text-lg font-semibold tracking-tight text-white">AD</div>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-sky-300">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
