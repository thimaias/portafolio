import { techData } from "@/data/portfolioData";
import { Code2 } from "lucide-react";

export default function TechStack() {
  return (
    <section className="py-12 border-t border-gray-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
          <Code2 className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Tecnologías
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {techData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900/30 p-5 rounded-xl border border-gray-800/80"
          >
            <span className="text-gray-500 text-xs block mb-1 font-mono uppercase tracking-wider">
              {item.label}
            </span>
            <div className="text-white font-semibold">{item.value}</div>
            <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}