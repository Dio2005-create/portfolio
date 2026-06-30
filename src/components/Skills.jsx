import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Compétences</p>
        <h2 className="text-3xl font-semibold text-white">Niveau d&apos;expertise</h2>
      </div>
      <div className="mt-10 space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex items-center justify-between text-sm font-medium text-slate-200">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-700" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
