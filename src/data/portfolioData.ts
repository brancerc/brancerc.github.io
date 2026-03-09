export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Customer Insights Dashboard for E-Commerce",
    summary:
      "Developed an interactive Power BI dashboard to analyze customer behavior, sales trends, and marketing performance for an e-commerce company.",
    images: [
      "https://example.com/dashboard1.jpg",
      "https://example.com/dashboard2.jpg",
      "https://example.com/dashboard3.jpg",
    ],
    tags: [
      "Power BI",
      "SQL",
      "Data Visualization",
      "Customer Analytics",
      "Business Intelligence",
    ],
    details: {
      challenge:
        "The company lacked a centralized reporting system to track customer engagement, purchase patterns, and marketing campaign effectiveness.",
      solution:
        "Designed and implemented a Power BI dashboard integrating data from Google Analytics, CRM systems, and sales records, providing real-time insights.",
      impact: [
        "Increased marketing ROI by 25% through data-driven campaign adjustments.",
        "Enhanced customer segmentation, leading to a 15% improvement in personalized recommendations and repeat purchases.",
      ],
    },
  }, // <--- AQUÍ ESTÁ LA COMA QUE FALTABA
  {
    id: 2,
    title: "Automated Financial Reporting System",
    summary:
      "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
    images: [
      "https://example.com/finance1.jpg",
      "https://example.com/finance2.jpg",
    ],
    tags: [
      "Python",
      "ETL",
      "Data Engineering",
      "Finance",
      "Power BI",
      "Automation",
    ],
    details: {
      challenge:
        "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
      solution:
        "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
      impact: [
        "Reduced reporting time from 5 days to a few hours, improving efficiency.",
        "Minimized errors in financial reports, ensuring data accuracy for decision-making.",
      ],
    },
  }, // <--- Y AQUÍ TAMBIÉN DEBES PONER UNA COMA PARA SEPARAR EL ID 2 DEL 3
  ,
  {
    id: 3,
    title: "SmartQA-AI — REST API Financiera con Spring Boot",
    summary:
      "API REST enterprise para gestión de clientes y transacciones financieras. Construida con Spring Boot 3, JPA, validación de RFC mexicano (SAT), documentación Swagger/OpenAPI 3.0 y cobertura de tests con JaCoCo >80%.",
    images: [
      "/projects/general.png",
      "/projects/post.png",
      "/projects/get.png",
      "/projects/getTransactions.png",
      "/projects/dbasecheck.png",
      "/projects/connect.png",
    ],
    tags: [
      "Java",
      "Spring Boot 3",
      "REST API",
      "JUnit 5",
      "JaCoCo",
      "Swagger",
      "H2",
      "Maven",
      "JPA",
    ],
    details: {
      challenge:
        "Diseñar una API financiera robusta con validaciones específicas para el mercado mexicano (RFC formato SAT), manejo estructurado de errores y cobertura de pruebas automatizadas superior al 80%.",
      solution:
        "Arquitectura en capas (Controller → Service → Repository) con Spring Boot 3. Incluye validación de RFC con regex, base de datos H2 en memoria, Swagger UI interactivo y reportes de cobertura con JaCoCo.",
      impact: [
        "Cobertura de pruebas unitarias e integración >80% validada con JaCoCo.",
        "10+ endpoints REST documentados con Swagger/OpenAPI 3.0.",
        "Validación de RFC mexicano (formato SAT) con manejo de errores estructurado por campo.",
      ],
    },
    externalLink: {
      title: "Ver repositorio",
      url: "https://github.com/brancerc/brancerc.github.io",
    },
  },
];
