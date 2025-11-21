export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

// src/data/experienceData.ts

export const jobs = [
  {
    title: "Software Engineer",
    company: "Innovatech Solutions",
    dates: "03/2023 - Present",
    description: [
      "Developed full-stack web applications using React, Node.js, and MongoDB.",
      "Implemented RESTful APIs and integrated third-party services.",
      "Optimized SQL queries and database schemas to improve performance.",
      "Led a team of junior developers and mentored them.",
      "Designed CI/CD pipelines reducing deployment time by 50%."
    ]
  },
  {
    title: "Data Analyst",
    company: "Tech Solutions Inc.",
    dates: "01/2019 - 12/2022",
    description: [
      "Developed interactive Power BI dashboards.",
      "Automated ETL processes using Python and SQL (40% efficiency boost).",
      "Collaborated with stakeholders to identify key metrics.",
      "Designed predictive models to forecast revenue and churn."
    ]
  },
  // Aquí agregamos tu educación como si fuera un "trabajo" para que aparezca en la línea de tiempo
  // O puedes dejarla aparte si planeas crear una sección nueva, pero para que compile, "jobs" debe existir.
  {
    title: "Ingeniería en Telemática",
    company: "Universidad [Tu Uni]", // El componente usa "company" para la institución
    dates: "08/2021 - Presente",
    description: [
      "Especialización en redes, antenas y ciberseguridad.",
      "Manejo de MATLAB, Cisco CLI, Linux (Kali/Debian).",
      "Proyectos de pentesting y análisis de señales."
    ]
  }
];

// Esta variable la dejamos aquí por si creamos una sección de educación separada en el futuro
export const education = [
  {
    title: "Ingeniería en Telemática",
    institution: "Universidad [Tu Uni]",
    dates: "08/2021 - Presente",
    description: [
        "Formación en redes y ciberseguridad."
    ]
  }
];