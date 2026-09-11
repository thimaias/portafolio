import { servicesData } from "@/data/portfolioData";
import { Sliders, Ticket, Shield, Trophy, Bot, Cpu } from "lucide-react";

const iconMap = {
  Sliders: Sliders,
  Ticket: Ticket,
  Shield: Shield,
  Trophy: Trophy,
  Bot: Bot,
};

export default function Services() {
  return (
    <section className="py-12 border-t border-gray-800/60">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
          <Cpu className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Lo que Puedo Hacer para Tu Servidor
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Bot;
          return (
            <div
              key={index}
              className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800/80 hover:border-[#5865F2]/50 transition duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 text-[#5865F2] flex items-center justify-center mb-4">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}