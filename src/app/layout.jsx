import './globals.css';

export const metadata = {
  title: 'thimatias | discord.py Specialist',
  description: 'Desarrollo de bots a medida, automatización de servidores y gestión de comunidades utilizando Python.',
  openGraph: {
    title: 'thimatias — Desarrollador de Bots de Discord',
    description: 'Especialista en discord.py, automatización y creación de comunidades.',
    url: 'https://portafolio-thimatias131-2356s-projects.vercel.app/',
    siteName: 'Portafolio thimatias',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thimatias | discord.py Specialist',
    description: 'Desarrollo de bots a medida y automatización con Python.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
