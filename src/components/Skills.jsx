import { skills, softSkills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="rounded-[32px] border border-sky-100 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Compétences</p>
        <h2 className="text-3xl font-semibold text-slate-800">Niveau d&apos;expertise</h2>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-800">Compétences techniques</h3>
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-sky-100">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-700" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-sky-100 bg-sky-50/70 p-6">
          <h3 className="text-xl font-semibold text-slate-800">Soft skills</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {softSkills.map((item) => (
              <span key={item} className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
