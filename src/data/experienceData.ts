export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const education: Education[] = [
  {
    title: "Ingeniería en Telemática",
    institution: "Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas", // Reemplazar con tu institución real
    dates: "08/2021 - Presente (9no Semestre)",
    description: [
      "Formación integral en ingeniería de redes, telecomunicaciones y ciberseguridad.",
      "Análisis y diseño de sistemas de transmisión, propagación de ondas y antenas.",
      "Procesamiento digital de señales (DSP), modulación y simulaciones avanzadas en MATLAB.",
      "Gestión de seguridad de redes y pentesting utilizando herramientas como Nmap, iptables y Kali Linux.",
      "Configuración y administración de dispositivos de red (Cisco CLI) y servidores Linux."
    ]
  }
];