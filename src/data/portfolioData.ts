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
    title: "Bus Unit Detector — Edge AI on NVIDIA Jetson",
    summary:
      "Production edge AI system deployed at a Mexico City bus depot. Detects and identifies bus unit numbers from live IP camera streams using YOLO + Tesseract OCR, running 100% on-device on an NVIDIA Jetson Orin Nano with real-time Telegram alerts.",
    images: [
      "/projects/bus-unit-detector/alarms.jpeg",
      "/projects/bus-unit-detector/dashboard.png",
      "/projects/bus-unit-detector/jetson.jpeg",
      "/projects/bus-unit-detector/topology.jpeg",
      "/projects/bus-unit-detector/site.jpeg",
      "/projects/bus-unit-detector/material.jpeg",
      "/projects/bus-unit-detector/buses1.jpeg",
      "/projects/bus-unit-detector/buses2.jpeg",
    ],
    tags: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "TensorRT",
      "Tesseract OCR",
      "OpenCV",
      "GStreamer",
      "PostgreSQL",
      "Flask",
      "Jetson Orin Nano",
      "Edge AI",
    ],
    details: {
      challenge:
        "Identify bus unit numbers from a live IP camera stream in real time, running entirely on edge hardware with no cloud dependency, while handling low-light conditions, motion blur, and varying angles across 150+ registered units.",
      solution:
        "Built a full inference pipeline on NVIDIA Jetson Orin Nano: GStreamer with NVDEC hardware decoding → YOLOv8 optimized via TensorRT → multi-strategy OpenCV image preprocessing (CLAHE, adaptive thresholding, morphological filters) → Tesseract OCR with voting system → PostgreSQL unit validation → Telegram alerts with confidence score. Flask REST API serves live HLS stream and detection history. Deployed as a systemd service with auto-recovery.",
      impact: [
        "22+ FPS real-time processing with <50ms end-to-end latency, fully on-device.",
        "150+ bus units validated against PostgreSQL — unauthorized units trigger instant Telegram alerts with snapshot and confidence score.",
        "Eliminated cloud dependency: 100% on-device inference using TensorRT GPU optimization on Jetson Orin Nano.",
      ],
    },
    externalLink: {
      title: "View Repository",
      url: "https://github.com/brancerc/bus-unit-detector",
    },
  }, // <--- Y AQUÍ TAMBIÉN DEBES PONER UNA COMA PARA SEPARAR EL ID 2 DEL 3
  ,
  {
    id: 3,
    title: "SmartQA-AI — Financial REST API",
    summary:
      "Enterprise REST API for customer and financial transaction management, built with Spring Boot 3, Swagger/OpenAPI 3.0, and JaCoCo test coverage >80%.",
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
        "Build a financial-grade API with Mexican RFC (SAT) validation, structured error handling, and automated test coverage above 80%.",
      solution:
        "Layered architecture (Controller → Service → Repository) using Spring Boot 3 and JPA, with H2 in-memory database, interactive Swagger UI, and JaCoCo coverage reports.",
      impact: [
        ">80% test coverage across unit and integration tests, verified with JaCoCo.",
        "10+ REST endpoints fully documented with Swagger/OpenAPI 3.0.",
        "Mexican RFC format validation with field-level structured error responses.",
      ],
    },
    externalLink: {
      title: "View Repository",
      url: "https://github.com/brancerc/brancerc.github.io",
    },
  },
];
