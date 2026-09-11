export const developerInfo = {
  name: "thimatias",
  title: "Desarrollador de Bots de Discord",
  badge: "discord.py Specialist",
  status: "Disponible para proyectos",
  description: "Desarrollo de bots a medida, automatización de servidores y gestión de comunidades utilizando Python.",
  contacts: {
    discord: "thimatias",
    github: "https://github.com/thimaias",
    email: "thimatias131@email.com"
  }
};

export const servicesData = [
  {
    icon: "Sliders",
    title: "Comandos Interactivos y Modernos",
    description: "Implementación de comandos Slash (/), botones, menús desplegables y formularios (modales) intuitivos."
  },
  {
    icon: "Ticket",
    title: "Sistemas de Tickets y Soporte",
    description: "Creación automatizada de canales privados con un solo clic para atención a clientes o reportes."
  },
  {
    icon: "Shield",
    title: "Moderación y Registro (Logs)",
    description: "Herramientas para administradores: mutes, expulsiones, baneos, purga de mensajes y auditoría de eventos."
  },
  {
    icon: "Trophy",
    title: "Sistemas de Niveles y Economía",
    description: "Mecánicas para fomentar la participación (XP por hablar, rangos de roles por nivel y tienda virtual del servidor)."
  },
  {
    icon: "Bot",
    title: "Organización y Automatización",
    description: "Bienvenidas personalizadas con imágenes/texto, asignación de roles interactivos (button roles) y comandos informativos."
  }
];

export const projectsData = [
  {
    id: "01",
    tag: "Módulo de Soporte",
    title: "Bot de Soporte y Tickets",
    description: "Facilita la atención a usuarios en servidores grandes mediante canales temporales.",
    features: [
      "Paneles con botones para abrir tickets",
      "Transcripción de conversaciones",
      "Cierre de soporte estructurado"
    ]
  },
  {
    id: "02",
    tag: "Módulo de Staff",
    title: "Bot de Moderación y Logs",
    description: "Ayuda al equipo de staff a mantener la seguridad y el orden en la comunidad.",
    features: [
      "Comandos /ban, /mute, /clear",
      "Canal exclusivo de notificaciones de eventos del servidor",
      "Auditoría en tiempo real"
    ]
  },
  {
    id: "03",
    tag: "Módulo Engagement",
    title: "Bot de Niveles y Recompensas",
    description: "Incentiva la actividad de los miembros recompensando su interacción constante.",
    features: [
      "Cálculo de experiencia por mensajes enviados",
      "Comando /rank con tarjeta visual o texto",
      "Auto-asignación de roles al subir de nivel"
    ]
  }
];

export const techData = [
  { label: "Lenguaje", value: "Python 3.10+", sub: "Motor principal" },
  { label: "Librería Principal", value: "discord.py", sub: "Cogs & UI Components" },
  { label: "Almacenamiento", value: "SQLite / JSON", sub: "Persistencia de datos local" }
];