export const personalInfo = {
  name: "Kavinkrishna MS",
  role: "Full-Stack Software Engineer & Backend Specialist",
  tagline: "Building scalable enterprise microservices with Java & Spring Boot alongside modern reactive web apps in React.",
  bio: "Computer Science Engineering student at Karpagam College of Engineering specializing in enterprise full-stack development. I architect resilient backend microservices, implement bulletproof JWT/RBAC security pipelines, and build reactive, data-dense interfaces with React 19.",
  college: "Karpagam College of Engineering",
  cgpa: "7.5 / 10 CGPA",
  degree: "B.E. Computer Science and Engineering",
  timeline: "Sep 2024 – Sep 2028",
  location: "Coimbatore, Tamil Nadu, India",
  email: "kavinkrishna2007@email.com",
  github: "https://github.com/KAVINKRISHNA8",
  githubHandle: "KAVINKRISHNA8",
  linkedin: "https://www.linkedin.com/in/kavin-krishna-5619b4420/",
  availableForHire: true,
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export const focusPillars = [
  {
    title: "Backend & Microservices",
    description: "Spring Boot 3, REST APIs, Microservices architecture, Spring Data JPA & Hibernate",
    icon: "Server"
  },
  {
    title: "Modern Frontend",
    description: "React.js (18 & 19), Vite, Tailwind CSS, Recharts analytics, and Leaflet maps",
    icon: "Layout"
  },
  {
    title: "Security & Access Control",
    description: "JWT Token-based Authentication, Role-Based Access Control (RBAC), and HTTPS best practices",
    icon: "ShieldCheck"
  },
  {
    title: "Distributed Data & DevOps",
    description: "Docker & Docker Compose containerization, MySQL, MongoDB, Hadoop HDFS, and Linux systems",
    icon: "Database"
  }
];

export const architectureMetrics = [
  { label: "Microservices Architected", value: "9+", detail: "Real-time AGMARKNET Sync" },
  { label: "Enterprise Modules", value: "4", detail: "HRMS Shift, Payroll & Claims" },
  { label: "Containerization", value: "100%", detail: "Docker & Docker Compose" },
  { label: "Security Layer", value: "JWT + RBAC", detail: "Stateless Authorization" }
];

export const skillCategories = [
  {
    title: "Backend & Systems",
    icon: "Server",
    skills: ["Java 17", "Spring Boot 3", "Microservices", "REST APIs", "Spring Data JPA", "Hibernate"]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: ["React.js (18 & 19)", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
  },
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: ["MySQL", "Oracle SQL", "MongoDB"]
  },
  {
    title: "Security & Authentication",
    icon: "Shield",
    skills: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Network Security", "Cryptography"]
  },
  {
    title: "Big Data & Distributed Tools",
    icon: "Cpu",
    skills: ["Hadoop", "HDFS", "YARN", "MapReduce"]
  },
  {
    title: "Core Computer Science",
    icon: "BookOpen",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    title: "DevOps & Developer Tools",
    icon: "Terminal",
    skills: ["Docker", "Docker Compose", "Git & GitHub", "Maven", "Linux", "VS Code", "Spring Tool Suite (STS)"]
  }
];

export const projects = [
  {
    id: "smart-retail-platform",
    title: "Smart Retail Price Monitoring & Consumer Fairness Platform",
    subtitle: "Real-Time Commodity Intelligence & Predictive Analytics Platform",
    year: "2026",
    badge: "Enterprise Microservices",
    description: "An advanced market intelligence platform built with a 9-microservice architecture to ingest, synchronize, and analyze agricultural commodity pricing from the AGMARKNET exchange in real-time.",
    keyPoints: [
      "Architected 9 independent Spring Boot microservices handling high-throughput price verification and synchronization.",
      "Developed AI-based fairness scoring and regression algorithms for forecasting regional commodity price trends.",
      "Implemented automated CRON pipelines for real-time price spike anomaly detection and notification dispatch.",
      "Crafted an interactive React 19 analytics dashboard integrating Leaflet geo-spatial maps and Recharts visual metrics."
    ],
    techStack: ["Java 17", "Spring Boot 3", "React 19", "Microservices", "JWT", "MySQL", "Leaflet Maps", "Recharts", "CRON"],
    githubUrl: "https://github.com/KAVINKRISHNA8",
    liveUrl: "#contact"
  },
  {
    id: "dayflow-hrms",
    title: "Dayflow HRMS - Full-Stack Enterprise HR System",
    subtitle: "Developed for the Odoo Hackathon 2026",
    year: "2026",
    badge: "Odoo Hackathon Project",
    description: "A comprehensive enterprise Human Resource Management System engineered to streamline complex workforce operations, multi-tier approvals, and automated compensation workflows.",
    keyPoints: [
      "Engineered end-to-end HR modules: Shift Rostering, Employee Leave Management, Expense Reimbursements, and Automated Payroll.",
      "Enforced granular Role-Based Access Control (RBAC) with secure stateless JWT tokens across all REST endpoints.",
      "Containerized backend, frontend, and database micro-services using Docker & Docker Compose for rapid, zero-drift local and cloud staging.",
      "Built clean, responsive React 18 user interfaces with intuitive self-service portals for employees and HR administrators."
    ],
    techStack: ["Java 17", "Spring Boot 3", "React 18", "Docker", "Docker Compose", "JWT", "REST APIs", "MySQL"],
    githubUrl: "https://github.com/KAVINKRISHNA8",
    liveUrl: "#contact"
  }
];

export const certifications = [
  {
    title: "Microsoft Learn: Cybersecurity Fundamentals",
    issuer: "Microsoft Learn",
    year: "2025",
    category: "Security",
    badge: "Credential",
    description: "Completed comprehensive training modules covering Cryptography, Network Security, Endpoint Security, and Authentication & Authorization principles."
  },
  {
    title: "Data Science Workshop",
    issuer: "Top Engineers - India",
    location: "IIT Madras Research Park, Chennai",
    year: "2025",
    category: "Data Science",
    badge: "Hands-on Workshop",
    description: "Participated in an intensive hands-on workshop focused on statistical modeling, data preprocessing pipelines, and practical machine learning applications."
  },
  {
    title: "Mobile Application Development with Flutter",
    issuer: "Kongu Engineering College",
    year: "2025",
    category: "Mobile Systems",
    badge: "Workshop",
    description: "Hands-on engineering workshop exploring cross-platform mobile architecture, reactive widget trees, and state management in Flutter."
  },
  {
    title: "Dayflow HRMS | Odoo Hackathon",
    issuer: "Odoo Hackathon",
    year: "2026",
    category: "Hackathon",
    badge: "Hackathon Entry",
    description: "Designed, engineered, and pitched the Dayflow full-stack enterprise HRMS platform under rapid competition deadlines."
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    institution: "Karpagam College of Engineering",
    location: "Coimbatore, India",
    period: "Sep 2024 – Sep 2028",
    grade: "CGPA: 7.5 / 10",
    description: "Focusing on enterprise software engineering, Data Structures, Operating Systems, Database Management Systems, and Microservices architecture."
  },
  {
    degree: "Grade 12 (Higher Secondary Certificate - HSC)",
    institution: "SRV BOYZ Higher Secondary School",
    location: "Namakkal, India",
    period: "Jun 2023 – Apr 2024",
    grade: "Completed with distinction",
    description: "Rigorous focus on Mathematics, Physics, Chemistry, and Computer Science foundations."
  }
];
