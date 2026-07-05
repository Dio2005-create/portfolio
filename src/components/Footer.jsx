import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="rounded-[32px] border border-sky-100 bg-white/80 p-8 text-center text-sm text-slate-500 shadow-soft">
      © 2026 {profile.name}. Tous droits réservés.
    </footer>
  )
}
