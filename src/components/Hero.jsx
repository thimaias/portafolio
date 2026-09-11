import { developerInfo } from "@/data/portfolioData";
import { Terminal, ArrowDown, Contact } from "lucide-react";

export default function Hero() {
  return (
    <header className="py-16 md:py-24">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono font-medium text-[#5865F2] bg-[#5865F2]/10 rounded-full border border-[#5865F2]/20">
        <Terminal className="w-3.5 h-3.5" />
        {developerInfo.badge}
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
        {developerInfo.name}
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed mb-8">
        {developerInfo.description}
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#proyectos"
          className="bg-[#5865F2] hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium text-sm transition duration-200 shadow-lg shadow-[#5865F2]/20 flex items-center gap-2"
        >
          Ver Proyectos <ArrowDown className="w-4 h-4" />
        </a>
        <a
          href="#contacto"
          className="bg-gray-800/80 hover:bg-gray-800 text-gray-200 px-6 py-3 rounded-xl font-medium text-sm border border-gray-700/80 transition duration-200 flex items-center gap-2"
        >
          Información de Contacto <Contact className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}