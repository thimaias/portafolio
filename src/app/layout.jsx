import "./globals.css";

export const metadata = {
  title: "Portafolio — Desarrollador de Bots de Discord",
  description: "Desarrollo de bots a medida...",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body class="bg-[#0b0f17] text-gray-200 font-sans antialiased selection:bg-[#5865F2] selection:text-white">
        {children}
      </body>
    </html>
  );
}