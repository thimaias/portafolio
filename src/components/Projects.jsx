import { projectsData } from "@/data/portfolioData";
import { Bot, Check } from "lucide-react";

export default function Projects() {
  return (
    <section id="proyectos" className="py-12 border-t border-gray-800/60">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
          <Bot className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Ejemplos de Bots & Proyectos
        </h2>
      </div>

      <div className="space-y-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800/80 hover:border-gray-700 transition"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#5865F2]/20 text-[#5865F2] font-semibold">
                {project.tag}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <ul class="grid md:grid-cols-3 gap-3 text-xs text-gray-400 font-mono">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="bg-gray-950/60 p-2.5 rounded-lg border border-gray-800/80 flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-[#57F287] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}