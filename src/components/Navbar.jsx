import { developerInfo } from "@/data/portfolioData";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 border-b border-gray-800/80">
      <div className="flex items-center space-x-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#57F287] animate-pulse"></div>
        <span className="font-mono text-xs tracking-wider text-gray-400 uppercase">
          {developerInfo.status}
        </span>
      </div>
      <a
        href="#contacto"
        className="text-xs font-semibold bg-gray-800/80 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition duration-200"
      >
        Contactar
      </a>
    </nav>
  );
}