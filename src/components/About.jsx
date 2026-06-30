import { profile } from '../data/profile'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">À propos</p>
          <h2 className="text-3xl font-semibold text-white">Profil</h2>
          <p className="max-w-3xl text-slate-300 leading-8">{profile.summary}</p>
        </div>
        <div className="rounded-[28px] border border-slate-800/90 bg-slate-900/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Compétences techniques</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-2xl border border-slate-700/90 bg-slate-950/90 p-4 text-sm text-slate-200">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
