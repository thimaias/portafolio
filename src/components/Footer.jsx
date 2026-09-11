export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-gray-500 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© Portafolio — Desarrollador de Bots de Discord</div>
      <div>
        Desplegado en <span className="text-white font-medium">Vercel</span>
      </div>
    </footer>
  );
}