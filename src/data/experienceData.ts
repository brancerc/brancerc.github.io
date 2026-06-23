export type Education = {
  title: string;
  institution: string;
  dates: string;
  description: string[];
  image?: string;  
};

export const education: Education[] = [
  {
    title: "B.S. in Telematics Engineering",
    institution: "UPIITA - IPN",
    dates: "2020 - 2025",
    description: [
      "Specialization in data networks, radiocommunications, and information security.",
      "Developed skills in programming, electronics, and technology project management.",
    ],
  },
  {
    title: "CCNA (Cisco Certified Network Associate)",
    institution: "Cisco",
    dates: "2025",
    description: [
      "Validation of expertise in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",
    ],
  },
  {
    title: "HCIA - Datacom",
    institution: "Huawei",
    dates: "2025",
    description: [
      "Certification in data communication technologies, enterprise network design, implementation, and maintenance.",
    ],
  },
  {
    title: "Azure Cloud Computing",
    institution: "Microsoft / IPN",
    dates: "2025",
    description: [
      "Foundations of cloud services, Azure architecture, and resource and identity management in cloud environments.",
    ],
  },
  // ← AGREGAR AQUÍ:
  {
    title: "Certificado de Cableado Estructurado",
    institution: "CONSANET",
    dates: "2024",
    description: [
      "Certification in structured cabling systems and network infrastructure installation.",
    ],
    image: "/cableado.jpg",
  },
];