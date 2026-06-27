// ──────────────────────────────────────────────
// Centralized data from Pentapalli Charan's CV
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Pentapalli Charan",
  firstName: "Charan",
  title: "Software Engineer & ML Enthusiast",
  tagline: "I build intelligent systems that solve real-world problems.",
  email: "pcharansaisrinivas@gmail.com",
  phone: "+91-7013016079",
  linkedin: "https://linkedin.com/in/pentapallicharan",
  github: "https://github.com/Pentapalli-Charan",
  location: "Phagwara, Punjab, India",
  hometown: "Palasa, Andhra Pradesh, India",
  availability: "Available for Opportunities",
  bio: `I'm a Computer Science Engineering student at Lovely Professional University with a deep passion for Machine Learning, Artificial Intelligence, and MLOps. I thrive at the intersection of intelligent systems and scalable software — building solutions that are not only technically robust but also meaningfully impactful. From developing AI-powered platforms to deploying containerized microservices, I bring a full-spectrum engineering mindset to every project I undertake.`,
  shortBio: `CS Engineering student specializing in ML, AI & MLOps.`,
};

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    description: "Core languages for building robust software solutions",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 92 },
      { name: "SQL", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "ML & AI",
    icon: "brain",
    description: "Machine Learning frameworks and AI technologies",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow", level: 78 },
      { name: "PyTorch", level: 75 },
      { name: "OpenCV", level: 82 },
      { name: "NLP", level: 80 },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: "cloud",
    description: "Infrastructure, CI/CD, and container orchestration",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 78 },
      { name: "Jenkins", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    description: "Relational database management systems",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "chart",
    description: "Data analysis and visualization tools",
    skills: [
      { name: "Jupyter Notebook", level: 88 },
      { name: "Power BI", level: 72 },
      { name: "Pandas", level: 85 },
    ],
  },
  {
    title: "Core Competencies",
    icon: "target",
    description: "Fundamental computer science and engineering skills",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Machine Learning", level: 88 },
      { name: "Computer Vision", level: 80 },
      { name: "Natural Language Processing", level: 78 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  date: string;
  featured: boolean;
  challenges: string[];
  solutions: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "pixit",
    title: "PIXIT",
    subtitle: "AI-Powered Image Stylization Platform",
    description:
      "MLOps-driven image stylization platform using OpenCV and FastAPI, containerized with Docker & Kubernetes.",
    longDescription: `PIXIT is a comprehensive AI-powered platform that revolutionizes image stylization through advanced Computer Vision techniques. The platform allows users to upload images and apply sophisticated cartoon-style transformations using OpenCV's edge detection, bilateral filtering, and color quantization algorithms. Built with a modern microservices architecture, PIXIT features a React.js frontend for seamless user interaction, a FastAPI backend for high-performance image processing, and PostgreSQL for robust data management. The entire infrastructure is containerized with Docker, orchestrated via Kubernetes, and deployed with Terraform for infrastructure-as-code practices. Jenkins handles CI/CD automation, while Prometheus and Grafana provide comprehensive monitoring and observability.`,
    techStack: [
      "Python",
      "OpenCV",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Nginx",
    ],
    githubUrl: "https://github.com/Pentapalli-Charan/PIXIT",
    date: "Feb 2026 — Apr 2026",
    featured: true,
    challenges: [
      "Achieving real-time image processing while maintaining high-quality output across various image sizes and formats",
      "Orchestrating multiple microservices with seamless inter-service communication in a containerized environment",
      "Setting up comprehensive monitoring and observability for production-grade reliability",
    ],
    solutions: [
      "Implemented optimized OpenCV pipelines with adaptive parameters that adjust processing based on input image characteristics",
      "Designed a Kubernetes-based deployment with proper service mesh, health checks, and auto-scaling policies",
      "Integrated Prometheus metrics collection and Grafana dashboards for real-time system monitoring and alerting",
    ],
    category: "MLOps / AI",
  },
  {
    id: "legal-assistant",
    title: "AI Legal Guidance Assistant",
    subtitle: "Intelligent Legal Chatbot",
    description:
      "NLP-powered legal chatbot using OpenAI API to deliver academic and legal guidance to students.",
    longDescription: `The AI Legal Guidance Assistant is an intelligent chatbot system designed to provide accessible legal guidance to students navigating academic and legal queries. Leveraging the power of Natural Language Processing and OpenAI's API, the system interprets complex legal questions and delivers accurate, contextually relevant responses. The assistant features sophisticated conversational logic with context tracking and fallback mechanisms, enabling smooth multi-turn interactions that feel natural and intuitive. The system prioritizes clarity, consistency, and user satisfaction, making legal information more accessible to students who may not have direct access to legal counsel.`,
    techStack: ["Python", "NLP", "Scikit-Learn", "OpenAI API"],
    githubUrl:
      "https://github.com/Pentapalli-Charan/AI-Legal-Guidance-Assistant",
    date: "Apr 2025",
    featured: true,
    challenges: [
      "Ensuring accurate interpretation of diverse and often ambiguous legal queries from students",
      "Building robust conversation flow with context retention across multi-turn interactions",
      "Maintaining response quality and consistency while handling edge cases gracefully",
    ],
    solutions: [
      "Fine-tuned NLP preprocessing pipelines with domain-specific legal vocabulary and intent classification",
      "Implemented a state machine-based conversation manager with context stacking and intelligent fallback logic",
      "Designed comprehensive testing suites with real-world query scenarios to validate response accuracy",
    ],
    category: "AI / NLP",
  },
  {
    id: "drone-anomaly",
    title: "Anomaly Detection in Drone Swarms",
    subtitle: "Unsupervised Learning System",
    description:
      "Unsupervised ML system using K-Means & DBSCAN to detect behavioral anomalies in drone swarms.",
    longDescription: `This research-oriented project explores the fascinating domain of drone swarm intelligence and anomaly detection. Using unsupervised machine learning techniques, the system analyzes drone swarm behavior patterns including formation dynamics, movement trajectories, and inter-drone communication patterns to identify anomalous behavior. By implementing clustering algorithms like K-Means and DBSCAN, the system learns what constitutes "normal" swarm dynamics and flags drones that drift, malfunction, or break coordination. The practical detection framework contributes to improving the safety and stability of large-scale swarm operations, with applications in surveillance missions, search-and-rescue operations, and synchronized drone shows.`,
    techStack: ["Python", "Scikit-Learn", "K-Means", "DBSCAN"],
    githubUrl:
      "https://github.com/Pentapalli-Charan/Anomaly-Detection-in-Drone-Swarm-Technology",
    date: "Nov 2025",
    featured: true,
    challenges: [
      "Defining clear behavioral boundaries for 'normal' vs 'anomalous' swarm patterns without labeled data",
      "Handling high-dimensional spatial-temporal data from multiple drones simultaneously",
      "Balancing detection sensitivity to minimize false positives while catching genuine anomalies",
    ],
    solutions: [
      "Applied ensemble clustering with K-Means for global patterns and DBSCAN for density-based local anomalies",
      "Engineered feature vectors combining positional, velocity, and communication metrics for comprehensive behavior representation",
      "Implemented adaptive threshold tuning based on swarm size and operational context for optimal detection accuracy",
    ],
    category: "ML / Research",
  },
];

export interface InternshipEntry {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  description: string;
  highlights: string[];
  techStack: string[];
  certificate: boolean;
}

export const internships: InternshipEntry[] = [
  {
    id: "infosys",
    company: "Infosys Springboard",
    role: "Virtual Intern",
    type: "Virtual Internship",
    duration: "Feb 2026 — Apr 2026",
    description:
      "Completed a comprehensive virtual internship focused on MLOps, AI/ML integration, and DevOps practices. Developed the PIXIT platform — an AI-powered image stylization system — from concept to production deployment.",
    highlights: [
      "Developed an MLOps-driven AI-powered image stylization platform (PIXIT) enabling users to upload and transform images using Computer Vision and OpenCV techniques",
      "Built REST APIs using FastAPI and integrated PostgreSQL for data management; implemented Docker containerization and automated CI/CD workflows using Jenkins",
      "Deployed and orchestrated services using Kubernetes and Terraform while integrating Prometheus and Grafana for monitoring and observability",
      "Gained practical exposure to software development, project deployment, testing, and DevOps practices in a professional environment",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Nginx",
    ],
    certificate: true,
  },
];

export interface TrainingEntry {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
  certificate: boolean;
  certificateUrl?: string;
}

export const trainings: TrainingEntry[] = [
  {
    id: "cipher-dsa",
    title: "Data Structures and Algorithms",
    organization: "Cipher Schools",
    duration: "Jun 2025 — Jul 2025",
    description:
      "Intensive training program focused on strengthening core DSA skills through hands-on implementation and problem-solving in Java.",
    highlights: [
      "Strengthened core DSA skills by implementing key data structures such as arrays, linked lists, stacks, queues, trees, graphs, and hash maps using Java",
      "Solved algorithmic problems involving recursion, sorting, searching, sliding window, two-pointer methods, and dynamic programming, improving problem-solving accuracy and speed",
      "Applied time and space complexity analysis to optimize Java implementations, contributing to cleaner, faster, and interview-ready solutions",
    ],
    certificate: true,
    certificateUrl: undefined, // User to provide PDF link later
  },
];

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  verifyUrl: string;
  category: string;
}

export const certificates: Certificate[] = [
  {
    id: "oracle-ai",
    title: "AI Foundations Associate",
    organization: "Oracle",
    date: "May 2026",
    verifyUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1A65EFF0511D3E348573BE98B7B428B56800277558A8B8E218BFA5537E12EF1E",
    category: "AI / ML",
  },
  {
    id: "nptel-python",
    title: "Python for Data Science",
    organization: "NPTEL",
    date: "Apr 2026",
    verifyUrl:
      "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7454226499513098240&origin=SOCIAL_SHARE",
    category: "Data Science",
  },
  {
    id: "nptel-cloud",
    title: "Introduction to Cloud Computing",
    organization: "NPTEL",
    date: "Apr 2025",
    verifyUrl:
      "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7399855213878272000&origin=SOCIAL_SHARE",
    category: "Cloud",
  },
  {
    id: "google-genai",
    title: "Introduction to Generative AI",
    organization: "Google Cloud",
    date: "Aug 2025",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/XB59GFGL5QUC",
    category: "AI / ML",
  },

];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  metric?: string;
  metricValue?: number;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackerrank",
    title: "3-Star Ratings on HackerRank",
    description:
      "Achieved 3-Star ratings in C++, SQL, Python, and Java on HackerRank, demonstrating strong proficiency across multiple programming languages and problem-solving domains.",
    date: "Mar 2026",
    metric: "Languages",
    metricValue: 4,
    icon: "star",
  },
  {
    id: "gfg",
    title: "85+ Problems on GeeksForGeeks",
    description:
      "Solved over 85 coding problems on GeeksForGeeks with a cumulative score exceeding 135, consistently tackling challenges across data structures, algorithms, and competitive programming.",
    date: "Feb 2026",
    metric: "Problems Solved",
    metricValue: 85,
    icon: "code",
  },
  {
    id: "ctf",
    title: "Cyber Security CTF Hackathon",
    description:
      "Qualified to Round 2 in a competitive Cyber Security Capture The Flag challenge hackathon, demonstrating skills in vulnerability analysis, cryptography, and security problem-solving.",
    date: "Feb 2024",
    icon: "shield",
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  score: string;
  scoreType: string;
  scoreValue: number;
  duration: string;
  location: string;
}

export const education: Education[] = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    score: "7.27",
    scoreType: "CGPA",
    scoreValue: 7.27,
    duration: "Aug 2023 — Present",
    location: "Phagwara, Punjab",
  },
  {
    id: "fiitjee",
    institution: "Fiitjee Junior College",
    degree: "Intermediate",
    score: "88.4%",
    scoreType: "Percentage",
    scoreValue: 88.4,
    duration: "Aug 2021 — May 2023",
    location: "Visakhapatnam, Andhra Pradesh",
  },
  {
    id: "sri-chaitanya",
    institution: "Sri Chaitanya School",
    degree: "Matriculation",
    score: "99.9%",
    scoreType: "Percentage",
    scoreValue: 99.9,
    duration: "May 2021",
    location: "Palasa, Andhra Pradesh",
  },
];

export const stats = [
  { label: "Problems Solved", value: 85, suffix: "+" },
  { label: "HackerRank Stars", value: 3, suffix: "★" },
  { label: "Certifications", value: 5, suffix: "+" },
  { label: "Projects Built", value: 3, suffix: "+" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/internship" },
  { label: "Certs", href: "/certificates" },

  { label: "Education", href: "/education" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
