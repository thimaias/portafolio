import { PERSONAL_INFO, SERVICES, PROJECTS, TECHNOLOGIES } from '@/data/portfolioData';

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-8 flex flex-col gap-20">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-slate-300 font-medium">{PERSONAL_INFO.status}</span>
        </div>
        <a
          href="#contacto"
          className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Contactar
        </a>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col gap-4 text-center md:text-left pt-8">
        <span className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">
          {PERSONAL_INFO.role}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a
            href="#proyectos"
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors border border-slate-700"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            Información de Contacto
          </a>
        </div>
      </header>

      {/* Servicios */}
      <section id="servicios" className="flex flex-col gap-8">
        <div className="border-l-4 border-indigo-500 pl-4">
          <h2 className="text-2xl font-bold text-white">Lo que Puedo Hacer para Tu Servidor</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <article
              key={index}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-all flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold text-indigo-300">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="flex flex-col gap-8">
        <div className="border-l-4 border-indigo-500 pl-4">
          <h2 className="text-2xl font-bold text-white">Ejemplos de Bots & Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <span className="text-xs bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded-full">
                    {project.module}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="text-indigo-400">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="flex flex-col gap-8">
        <div className="border-l-4 border-indigo-500 pl-4">
          <h2 className="text-2xl font-bold text-white">Tecnologías</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex flex-col gap-1"
            >
              <span className="text-xs text-indigo-400 font-semibold uppercase">{tech.type}</span>
              <div className="text-xl font-bold text-white">{tech.name}</div>
              <div className="text-xs text-slate-400">{tech.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-900/50 p-8 rounded-2xl flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">¿Interesado en trabajar juntos?</h2>
          <p className="text-slate-300 text-sm">
            Si necesitas un bot personalizado, automatizar funciones o integrar mecánicas exclusivas en tu servidor de Discord, no dudes en contactarme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800">
            <span className="text-xs text-slate-400 block">Discord</span>
            <span className="font-medium text-white">{PERSONAL_INFO.discord}</span>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <span className="text-xs text-slate-400 block">GitHub</span>
            <span className="font-medium text-white">Perfil GitHub</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <span className="text-xs text-slate-400 block">Email</span>
            <span className="font-medium text-white">{PERSONAL_INFO.email}</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-2">
        <div>© Portafolio — Desarrollador de Bots de Discord</div>
        <div>
          Desplegado en <span className="text-slate-300 font-medium">Vercel</span>
        </div>
      </footer>
    </main>
  );
}
