import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Échangeons sur votre prochain projet</h2>
          <p className="max-w-xl text-slate-300 leading-7">
            Je suis disponible pour des missions de développement web, d’architecture data ou de transformation digitale. Contactez-moi directement par email ou via mes profils professionnels.
          </p>
          <div className="space-y-4 rounded-[28px] border border-slate-800/90 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Liens professionnels</p>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-700/90 bg-slate-950/90 px-5 py-4 text-slate-200 transition hover:border-sky-400/60 hover:bg-slate-900">
              GitHub
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-700/90 bg-slate-950/90 px-5 py-4 text-slate-200 transition hover:border-sky-400/60 hover:bg-slate-900">
              LinkedIn
            </a>
            <div className="rounded-2xl bg-slate-950/90 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-white">{profile.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[28px] border border-slate-800/90 bg-slate-900/80 p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Coordonnées</p>
            <p className="mt-4 text-slate-300 leading-7">
              Disponible pour des collaborations sur des applications métiers, des plateformes data, et des projets SaaS.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-slate-950/90 p-5 text-slate-300">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-white">{profile.contact.email}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Disponibilité</p>
              <p className="mt-2 text-base font-medium text-white">Projets freelance / CDI technique / prestations sur mesure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
