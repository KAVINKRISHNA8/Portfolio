export const PORTFOLIO_DATA = {
  personal: {
    name: "Kavin Krishna M S",
    shortName: "Kavin Krishna",
    title: "Full-Stack Developer & CSE Student",
    college: "Karpagam College Of Engineering",
    location: "Coimbatore, India",
    email: "kavinkrishna2007@gmail.com",
    web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
    avatar: "/assets/kavin_avatar.jpg",
    resumeUrl: "#", // User can link their Google Drive or downloadable PDF
    summary:
      "Computer Science Engineering student specializing in full-stack development with Java, Spring Boot, React.js, REST APIs, Microservices, SQL, and DBMS. Experienced in developing scalable backend services, responsive web applications, and secure REST APIs using JWT and RBAC. Strong foundation in Data Structures, OOP, Operating Systems, and Computer Networks.",
    roles: [
      "Full-Stack Developer",
      "Java & Spring Boot Engineer",
      "Microservices Developer",
      "React.js Specialist",
    ],
    status: "Open to Opportunities & Internships",
    stats: [
      { value: "9+", label: "Microservices", highlight: "Spring Boot Architecture" },
      { value: "7.5", label: "CGPA", highlight: "B.E. Computer Science" },
      { value: "4+", label: "Certifications", highlight: "Cisco & Microsoft" },
      { value: "2028", label: "Graduating Batch", highlight: "Karpagam College of Eng." },
    ],
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/KAVINKRISHNA8",
      username: "KAVINKRISHNA8",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kavin-krishna-5619b4420/",
      username: "kavin-krishna",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/KAVINKRISHNA-MS/",
      username: "KAVINKRISHNA-MS",
    },
    {
      platform: "Email",
      url: "mailto:kavinkrishna2007@gmail.com",
      username: "kavinkrishna2007@gmail.com",
    },
  ],

  tags: [
    "Java & Spring Boot",
    "React.js & Vite",
    "Microservices",
    "REST APIs & JWT",
    "MySQL & MongoDB",
    "Docker & Containerization",
    "Data Structures & Algorithms",
    "Full-Stack Web Dev",
  ],

  skills: [
    {
      category: "Programming Languages",
      icon: "Code",
      skills: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Frontend Development",
      icon: "Layers",
      skills: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend & Microservices",
      icon: "Server",
      skills: [
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Microservices Architecture",
      ],
    },
    {
      category: "Databases",
      icon: "Database",
      skills: ["MySQL", "Oracle SQL", "MongoDB"],
    },
    {
      category: "Security & Authentication",
      icon: "ShieldCheck",
      skills: [
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "API Security",
      ],
    },
    {
      category: "Core Computer Science",
      icon: "BrainCircuit",
      skills: [
        "Data Structures",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      category: "Big Data & DevOps Tools",
      icon: "Wrench",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "Maven",
        "Hadoop",
        "HDFS",
        "YARN",
        "MapReduce",
        "STS",
        "VS Code",
        "Linux",
      ],
    },
  ],

  academics: [
    {
      institution: "Karpagam College Of Engineering",
      link: "https://kce.ac.in/",
      program: "B.E. Computer Science and Engineering",
      year: "Sep 2024 – Sep 2028",
      location: "Coimbatore, India",
      scoreLabel: "CGPA",
      score: "7.5 / 10",
      description:
        "Specializing in software engineering, distributed systems, full-stack architecture, and database management.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS & SQL",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      institution: "SRV BOYZ Higher Secondary School",
      link: "#",
      program: "Grade 12 (HSC)",
      year: "Jun 2023 – Apr 2024",
      location: "Namakkal, India",
      scoreLabel: "Status",
      score: "Completed",
      description:
        "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
  ],

  projects: [
    {
      title: "Dayflow HRMS - Full-Stack HR System",
      subtitle: "Odoo Hackathon 2026",
      year: "2026",
      desc: "Enterprise-ready full-stack Human Resource Management System built for scalable organizational management. Features role-based access control, shift scheduling, expense tracking, leave workflows, and automated payroll calculation.",
      tags: ["Java 17", "Spring Boot 3", "React 18", "JWT", "Docker", "REST API"],
      architectureHighlights: [
        "Spring Boot 3 REST Backend",
        "JWT + RBAC Authentication",
        "Docker Containerized",
      ],
      highlights: [
        "Developed full-stack HRMS with Spring Boot 3, React 18, and secure REST APIs.",
        "Implemented Shift Rostering, Expense Claims, Leave Management, and Payroll Processing modules.",
        "Containerized the entire application using Docker and Docker Compose for streamlined deployment.",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/KAVINKRISHNA8",
          type: "code",
        },
      ],
    },
    {
      title: "Smart Retail Price Monitoring & Consumer Fairness Platform",
      subtitle: "Agri-Tech & Consumer Protection",
      year: "2026",
      desc: "Distributed multi-service platform for real-time market price synchronization, AI-powered fairness scoring, and predictive commodity analytics to protect consumers against unfair price surges.",
      tags: [
        "Java 17",
        "Spring Boot 3",
        "React 19",
        "Microservices",
        "JWT",
        "MySQL",
        "REST APIs",
        "Leaflet",
        "Recharts",
      ],
      architectureHighlights: [
        "9 Microservices Cluster",
        "AI Price Fairness Engine",
        "CRON Automated Alerts",
      ],
      highlights: [
        "Built 9 Spring Boot microservices for real-time AGMARKNET price synchronization and verification.",
        "Developed AI-based price fairness scoring and regression models for commodity price prediction.",
        "Implemented JWT authentication, RBAC, and CRON-based automated price alerts and notifications.",
        "Developed a React 19 frontend with Leaflet interactive geo-maps and Recharts analytics dashboards.",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/KAVINKRISHNA8",
          type: "code",
        },
      ],
    },
  ],

  certifications: [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy • Karpagam College of Engineering",
      location: "Coimbatore, India",
      year: "2026",
      type: "Course Completion",
      certId: "472b4292-4028-44b7-97e0-fe2424b2b25b",
      desc: "Comprehensive networking certification covering network architecture, IP addressing (IPv4/IPv6), Ethernet operations, subnetting, media access control, and core networking fundamentals.",
      topics: [
        "Computer Networks",
        "CCNA",
        "IPv4 & IPv6",
        "Subnetting",
        "Network Security",
        "Cisco",
      ],
    },
    {
      title: "Data Science Workshop",
      issuer: "Top Engineers - India, IIT Madras Research Park",
      location: "Chennai, India",
      year: "2025",
      type: "Workshop",
      desc: "Intensive training in data analysis, statistical modeling, machine learning foundations, and industry data science practices.",
      topics: ["Data Science", "Machine Learning", "Data Analysis", "IIT Madras"],
    },
    {
      title: "Mobile Application Development with Flutter",
      issuer: "Kongu Engineering College",
      location: "Erode, India",
      year: "2025",
      type: "Certification",
      desc: "Comprehensive hands-on training in cross-platform mobile application development, state management, and modern Dart/Flutter reactive UI architectures.",
      topics: ["Flutter", "Dart", "Cross-Platform", "Mobile Architecture"],
    },
    {
      title: "Microsoft Learn: Cybersecurity Fundamentals",
      issuer: "Microsoft Learn",
      location: "Online",
      year: "2025",
      type: "Certification",
      desc: "Completed specialized modules in Cryptography, Network Security, Device Security, and Authentication & Authorization protocols.",
      topics: ["Cryptography", "Network Security", "Device Security", "JWT & RBAC"],
    },
  ],
};
