// src/data/experienceData.ts

export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export type Education = {
  title: string;
  institution: string;
  dates: string;
  description: string[];
};

// --- EXPERIENCIA / PROYECTOS ---
export const jobs: Job[] = [
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

// --- EDUCACIÓN Y CERTIFICACIONES ---
export const education: Education[] = [
  {
    title: "Ingeniería en Telemática",
    institution: "UPIITA - IPN",
    dates: "2020 - 2025", // Actualizado según tu CV
    description: [
      "Especialización en redes de datos, radiocomunicaciones y seguridad informática.",
      "Desarrollo de habilidades en programación, electrónica y gestión de proyectos tecnológicos."
    ]
  },
  {
    title: "CCNA (Cisco Certified Network Associate)",
    institution: "Cisco",
    dates: "2025",
    description: [
      "Validación de conocimientos en fundamentos de red, acceso a la red, conectividad IP, servicios IP, fundamentos de seguridad y automatización."
    ]
  },
  {
    title: "HCIA - Datacom",
    institution: "Huawei", // Corregido de 'Hawaii' a 'Huawei'
    dates: "2025",
    description: [
      "Certificación en tecnologías de comunicación de datos, diseño de redes empresariales, implementación y mantenimiento."
    ]
  },
  {
    title: "Azure Cloud Computing",
    institution: "Microsoft / IPN",
    dates: "2025",
    description: [
      "Fundamentos de servicios en la nube, arquitectura de Azure, y gestión de recursos e identidad en entornos cloud."
    ]
  }
];