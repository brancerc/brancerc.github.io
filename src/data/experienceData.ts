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

// --- EXPERIENCE / PROJECTS ---
export const jobs: Job[] = [
  {
    title: "Junior Network & Security Engineer",
    company: "Independent Projects",
    dates: "Jan 2024 - Present",
    description: [
      "Configuring and administering Linux servers (Debian/Kali) for lab environments and security testing.",
      "Conducting vulnerability and network traffic analysis using tools such as Nmap, Wireshark, and iptables.",
      "Designing and simulating telecommunications systems and wave propagation through MATLAB scripting.",
      "Implementing secure network topologies and configuring routing and switching devices via Cisco CLI.",
      "Developing software solutions for digital signal processing and task automation.",
    ],
  },
];

// --- EDUCATION AND CERTIFICATIONS ---
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
];
