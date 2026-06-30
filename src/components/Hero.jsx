import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Portfolio</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">{profile.name}</h1>
          <p className="text-2xl font-medium text-slate-200">{profile.title}</p>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
              Voir mes projets
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white">
              Me contacter
            </a>
          </div>
        </div>
        <div className="rounded-[28px] border border-slate-800/90 bg-gradient-to-br from-slate-900 to-slate-950/95 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Faits clés</p>
          <div className="mt-8 grid gap-4">
            {profile.stats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-950/90 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
