import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Projets</p>
        <h2 className="text-3xl font-semibold text-white">Sélection de projets</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[28px] border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky-400/50">
            <div className="mb-5 flex items-center justify-between rounded-3xl bg-slate-950/90 px-4 py-3 text-sm text-slate-400">
              <span className="font-medium text-slate-200">{project.label}</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">Projet</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400 ring-1 ring-slate-700/80">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
