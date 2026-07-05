import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="rounded-[32px] border border-sky-100 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Contact</p>
          <h2 className="text-3xl font-semibold text-slate-800">Échangeons sur votre prochain projet</h2>
          <p className="max-w-xl text-slate-600 leading-7">
            Je suis {profile.name}, étudiant en M1 à EMIT, et je suis à l’écoute de collaborations, de projets de développement ou d’opportunités professionnelles. Contactez-moi directement par email ou via mes profils professionnels.
          </p>
          <div className="space-y-4 rounded-[28px] border border-sky-100 bg-sky-50/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Liens professionnels</p>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="block rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-slate-700 transition hover:border-sky-400/60 hover:bg-white">
              GitHub
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="block rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-slate-700 transition hover:border-sky-400/60 hover:bg-white">
              LinkedIn
            </a>
            <div className="rounded-2xl bg-white p-5 text-slate-600">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-slate-800">{profile.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[28px] border border-sky-100 bg-sky-50/80 p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Coordonnées</p>
            <p className="mt-4 text-slate-600 leading-7">
              Ouvert aux projets académiques, aux collaborations techniques et aux opportunités de croissance professionnelle.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-sky-50 p-5 text-slate-600">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-slate-800">{profile.contact.email}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Disponibilité</p>
              <p className="mt-2 text-base font-medium text-slate-800">Projets freelance / CDI technique / prestations sur mesure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
