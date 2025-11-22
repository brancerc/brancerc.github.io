export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

// Definimos la estructura de la Educación (¡Esto faltaba!)
export type Education = {
  title: string;
  institution: string;
  dates: string;
  description: string[];
};


export const jobs = [
  {
    title: "Junior Network & Security Engineer",
    company: "Proyectos Independientes",
    dates: "01/2024 - Presente",
    description: [
      "Configuración y administración de servidores Linux (Debian/Kali) para entornos de laboratorio y pruebas de seguridad.",
      "Análisis de vulnerabilidades y tráfico de red utilizando herramientas como Nmap, Wireshark e iptables.",
      "Diseño y simulación de sistemas de telecomunicaciones y propagación de ondas mediante scripts en MATLAB.",
      "Implementación de topologías de red seguras y configuración de dispositivos de enrutamiento y conmutación (Cisco CLI).",
      "Desarrollo de soluciones de software para procesamiento digital de señales y automatización de tareas."
    ]
  }
];

// Lista de Educación
export const education: Education[] = [
  {
    title: "Ingeniería en Telemática",
    institution: "UPIITA - IPN", // Lo abrevié para que se vea mejor en móviles, pero puedes poner el nombre completo si prefieres
    dates: "08/2021 - Presente",
    description: [
        "Formación integral en redes de datos, radiocomunicaciones y ciberseguridad."
    ]
  }
];