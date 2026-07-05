import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="rounded-[32px] border border-sky-100 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Portfolio</p>
          <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">{profile.name}</h1>
          <p className="text-2xl font-medium text-sky-700">{profile.title}</p>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{profile.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Voir mes projets
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-sky-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700">
              Me contacter
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-center rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-soft">
            <img
              src="/src/assets/photo.png"
              alt="Photo de MASY RAKOTOMALALA Claudio Joash"
              className="h-56 w-56 rounded-full border border-slate-700/80 object-cover shadow-lg"
            />
          </div>
          <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Faits clés</p>
            <div className="mt-8 grid gap-4">
              {profile.stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-sky-50 p-5 text-slate-600">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
