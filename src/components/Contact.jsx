import { developerInfo } from "@/data/portfolioData";
import { MessageSquare, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 border-t border-gray-800/60 mb-12">
      <div className="bg-gradient-to-br from-gray-900 to-[#0d111a] border border-gray-800 p-8 md:p-12 rounded-3xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Interesado en trabajar juntos?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Si necesitas un bot personalizado, automatizar funciones o integrar mecánicas exclusivas en tu servidor de Discord, no dudes en contactarme.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Discord */}
            <div className="bg-gray-950/80 p-4 rounded-xl border border-gray-800/80 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#5865F2] mb-1">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs text-gray-400 font-mono">Discord</span>
              </div>
              <div className="text-white font-semibold text-sm truncate">
                {developerInfo.contacts.discord}
              </div>
            </div>

            {/* GitHub */}
            <a
              href={developerInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-950/80 p-4 rounded-xl border border-gray-800/80 hover:border-gray-600 transition block"
            >
              <div className="flex items-center gap-2 text-white mb-1">
                <Github className="w-4 h-4" />
                <span className="text-xs text-gray-400 font-mono">GitHub</span>
              </div>
              <div className="text-white font-semibold text-sm truncate hover:text-[#5865F2] transition">
                Perfil GitHub
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${developerInfo.contacts.email}`}
              className="bg-gray-950/80 p-4 rounded-xl border border-gray-800/80 hover:border-[#5865F2] transition block"
            >
              <div className="flex items-center gap-2 text-[#5865F2] mb-1">
                <Mail className="w-4 h-4" />
                <span className="text-xs text-gray-400 font-mono">Email</span>
              </div>
              <div className="text-white font-semibold text-sm truncate hover:text-[#5865F2] transition">
                {developerInfo.contacts.email}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}