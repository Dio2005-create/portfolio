import { useState } from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    alert('Merci ! Votre message a bien été envoyé.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Entrons en contact</h2>
          <p className="max-w-xl text-slate-300 leading-7">
            Pour discuter d&apos;un projet, d&apos;une mission ou d&apos;une collaboration, envoyez-moi un message via le formulaire ou utilisez les liens ci-dessous.
          </p>
          <div className="space-y-4 rounded-[28px] border border-slate-800/90 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Liens</p>
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
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-slate-800/90 bg-slate-900/80 p-8">
          <label className="block text-sm font-medium text-slate-200">
            Nom
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-3 w-full rounded-2xl border border-slate-700/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              placeholder="Votre nom"
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-3 w-full rounded-2xl border border-slate-700/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              placeholder="email@exemple.com"
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Message
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-3 h-36 w-full resize-none rounded-2xl border border-slate-700/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              placeholder="Votre message"
              required
            />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  )
}
