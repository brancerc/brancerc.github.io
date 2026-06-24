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
    title: "Network Automation Lab — NetDevOps with GNS3 & NETCONF/RESTCONF",
    summary:
      "Designed a virtualized network lab (Cisco CSR1000v core router + IOL-L2 access switches) to automate, verify, and audit network configuration using Infrastructure-as-Code principles.",
    images: [
      "/projects/net-GNS3/gns31.png",
      "/projects/net-GNS3/gns32.png",
      "/projects/net-GNS3/gns33.png",
    ],
    tags: [
      "GNS3",
      "Cisco IOS-XE",
      "Netmiko",
      "NETCONF/RESTCONF",
      "PostgreSQL",
      "Network Automation",
    ],
    details: {
      challenge:
        "Manually configuring VLANs, OSPF, and security hardening across multiple network devices via CLI is slow, error-prone, and leaves no structured trail to detect configuration drift over time.",
      solution:
        "Built a GNS3 lab with a Cisco CSR1000v core router (full IOS-XE) and IOL-L2 access switches, automating configuration via Python/Netmiko and using NETCONF/RESTCONF to pull structured (XML/JSON) configuration state for diffing against expected state, with results logged to PostgreSQL as an audit trail. Along the way, diagnosed and resolved several real infrastructure constraints: nested-virtualization conflicts between Hyper-V/WSL2 and VMware blocking hardware acceleration, hardware RAM limits requiring sequential (not concurrent) node execution, legacy SSH key-exchange negotiation with older IOS-XE images, and an ARP-resolution failure traced to GNS3's internal bridging engine — resolved by isolating the automation control plane on the host OS.",
      impact: [
        "Reduced per-device configuration time from ~20 minutes (manual CLI) to under 2 minutes via automated scripts.",
        "Implemented a NETCONF/RESTCONF verification layer enabling configuration-drift detection, instead of relying on manual CLI inspection.",
        "Diagnosed a hypervisor-level ARP/bridging conflict through systematic L2/L3 troubleshooting (rp_filter, iptables, ARP cache analysis), demonstrating network debugging beyond basic scripting.",
      ],
    },
  },
  {
    id: 2,
    title: "Bus Unit Detector — Edge AI on NVIDIA Jetson",
    summary:
      "Production edge AI system deployed at a Mexico City bus depot. Detects and identifies bus unit numbers from live IP camera streams using YOLO + Tesseract OCR, running 100% on-device on an NVIDIA Jetson Orin Nano with real-time Telegram alerts.",
    images: [
       "/projects/bus-unit-detector/dashboardMetrobus.png",
      "/projects/bus-unit-detector/recognition.jpg",
      "/projects/bus-unit-detector/alarms.jpeg",
      "/projects/bus-unit-detector/dashboard.png",
      "/projects/bus-unit-detector/jetson.jpeg",
      "/projects/bus-unit-detector/buses1.jpeg",
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
  {
  id: 3, // ← ajusta el número según el último id que tengas
  title: "Edge Gateway Network Topology — Jetson as Single-Port Router",
  summary:
    "Designed and deployed a single-NIC network topology using an NVIDIA Jetson Orin Nano as a Linux-based gateway, handling static routing and traffic redirection for an edge AI deployment.",
  images: [
    "/projects/bus-unit-detector/topology.jpeg",
    "/projects/bus-unit-detector/site.jpeg",
    "/projects/network-bus/camara_s.jpeg",
  ],
  tags: [
    "Linux Networking",
    "Static Routing",
    "iptables",
    "Switch Configuration",
    "Single-Port Gateway",
    "Edge Networking",
  ],
  details: {
    challenge:
      "The edge AI device (Jetson Orin Nano) had only one physical network interface available on-site, requiring a topology that could route camera traffic, internet access, and local services through a single port without a dedicated router.",
    solution:
      "Configured the Jetson as a Linux gateway using static IP assignment, manual routing tables, and traffic redirection rules (iptables) to bridge the IP camera network with the outbound internet connection through a single switch port.",
    impact: [
      "Eliminated the need for additional networking hardware, reducing on-site deployment cost and complexity.",
      "Demonstrated practical Linux routing and traffic management skills in a real production environment.",
      "Maintained stable connectivity for 24/7 camera streaming and alerting with a minimal single-port topology.",
    ],
  },
},
  {
    id: 4,
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
