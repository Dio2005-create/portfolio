import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="rounded-[32px] border border-sky-100 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Projets</p>
        <h2 className="text-3xl font-semibold text-slate-800">Sélection de projets</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[28px] border border-sky-100 bg-sky-50/70 p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky-300">
            <div className="mb-5 flex items-center justify-between rounded-3xl bg-white/80 px-4 py-3 text-sm text-slate-500">
              <span className="font-medium text-slate-700">{project.label}</span>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-700">Projet</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
            <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600 ring-1 ring-sky-100">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Voir sur GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
