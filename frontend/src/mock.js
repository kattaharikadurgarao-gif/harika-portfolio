// Mock data for Harika Katta's portfolio — replace with backend later

export const profile = {
  name: "Harika Katta",
  firstName: "Harika",
  lastName: "Katta",
  title: "Cloud & DevOps Engineer · ServiceNow Administrator",
  tagline:
    "I design, automate and operate cloud-native platforms — building CI/CD pipelines, container workflows and ITSM solutions that ship reliably.",
  shortBio:
    "Cloud + DevOps engineer with hands-on experience across CI/CD, Docker, Linux and ServiceNow administration. I focus on cloud-based platforms and automation.",
  longBio:
    "I'm Harika — a final-year B.Tech student at Geethanjali Institute of Science and Technology (CGPA 8.5) specializing in Cloud and DevOps. My day-to-day is about making software ship faster and operate cleaner: building Docker-based CI/CD pipelines, scripting infrastructure, and administering ServiceNow ITSM platforms. I've delivered a Dockerised CI/CD workflow, customised ServiceNow workflows during a real-world internship, and complemented that with data-analytics projects to keep my problem-solving edge sharp. I'm now seeking an entry-level Cloud / DevOps / ServiceNow role where I can keep automating the boring parts.",
  location: "Nellore, Andhra Pradesh, India",
  email: "kattaharikadurgarao@gmail.com",
  phone: "+91-9347580293",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/katta-harika-23522a270/",
  resumeUrl: "#",
  available: true,
};

export const stats = [
  { label: "CGPA", value: "8.5", suffix: "/10" },
  { label: "Cloud / DevOps focus", value: "100", suffix: "%" },
  { label: "Deploy time cut", value: "2", suffix: "min" },
  { label: "Certifications", value: "3", suffix: "" },
];

// Skills ordered by priority: Cloud + DevOps + ServiceNow first
export const skills = {
  primary: [
    { name: "Cloud Platforms (AWS / Azure basics)", level: 82 },
    { name: "Docker & Containerization", level: 88 },
    { name: "CI/CD (GitHub Actions, Pipelines)", level: 85 },
    { name: "ServiceNow Administration", level: 86 },
    { name: "Linux / Shell", level: 80 },
  ],
  secondary: [
    { name: "Git & GitHub", level: 90 },
    { name: "Python", level: 84 },
    { name: "SQL & DBMS", level: 78 },
    { name: "Power BI", level: 70 },
  ],
  tools: [
    "AWS",
    "Docker",
    "GitHub Actions",
    "ServiceNow",
    "Linux",
    "Git",
    "Bash",
    "Python",
    "SQL",
    "Power BI",
    "VS Code",
  ],
  soft: [
    "Analytical Thinking",
    "Problem Solving",
    "Adaptability",
    "Team Collaboration",
    "Clear Communication",
  ],
};

export const projects = [
  {
    id: "cicd-docker",
    title: "CI/CD Pipeline with Docker",
    category: "Cloud · DevOps",
    summary:
      "Automated build, test and deploy pipeline for a containerised Python service — image size cut by ~40%.",
    description:
      "Designed a GitHub Actions workflow that lints, tests, builds a Docker image and pushes it to a registry on every merge to main. Wrote a multi-stage Dockerfile that reduced image size by ~40% and cut deploy time to under 2 minutes. Added health-check endpoints and a rollback step.",
    image:
      "https://images.unsplash.com/photo-1774791242463-ad4fd6386cb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZmxvdyUyMGFic3RyYWN0fGVufDB8fHx8MTc3NzA5NjgxOXww&ixlib=rb-4.1.0&q=85",
    tags: ["Docker", "GitHub Actions", "Linux", "CI/CD"],
    metrics: [
      { label: "Image size", value: "-40%" },
      { label: "Deploy time", value: "~2 min" },
    ],
    repo: "#",
    live: "#",
    year: "2025",
    featured: true,
  },
  {
    id: "servicenow-itsm",
    title: "ServiceNow ITSM Workflow Suite",
    category: "ServiceNow · ITSM",
    summary:
      "Customised incident & change management workflows, business rules and ACLs for a real-world client environment.",
    description:
      "During my Metaforge internship I configured incident, problem and change management modules. Built form layouts, client scripts and business rules; managed user roles and ACLs across dev/test instances. Documented runbooks and trained two junior admins.",
    image:
      "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["ServiceNow", "ITSM", "Workflows", "ACLs"],
    metrics: [
      { label: "Workflows", value: "12+" },
      { label: "Client scripts", value: "20+" },
    ],
    repo: "#",
    live: "#",
    year: "2024",
    featured: true,
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Prediction (side project)",
    category: "Data Analytics",
    summary:
      "ML classifier on the Wisconsin dataset reaching 95% accuracy — kept as a problem-solving side project.",
    description:
      "End-to-end pipeline: data cleaning, feature engineering, model selection (Logistic Regression, Random Forest, SVM), hyper-parameter tuning and cross-validation. Built primarily to keep my analytics and Python skills sharp alongside cloud work.",
    image:
      "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3NzA5NjgwOXww&ixlib=rb-4.1.0&q=85",
    tags: ["Python", "Scikit-learn", "Pandas", "EDA"],
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Precision", value: "94%" },
    ],
    repo: "#",
    live: "#",
    year: "2024",
    featured: false,
  },
];

export const experience = [
  {
    id: "servicenow",
    role: "ServiceNow Administrator Intern",
    company: "Metaforge IT Solutions",
    location: "Hyderabad, India",
    period: "2024",
    bullets: [
      "Owned ITSM processes — incident, problem and change management — across dev/test instances.",
      "Customised workflows, form layouts, client scripts and business rules to match client SLAs.",
      "Managed user roles, ACLs and system configurations; authored runbooks and trained two junior admins.",
    ],
    stack: ["ServiceNow", "ITSM", "JavaScript", "Workflows"],
  },
];

export const education = [
  {
    id: "btech",
    school: "Geethanjali Institute of Science and Technology",
    degree: "B.Tech — Computer Science",
    period: "Oct 2022 – Apr 2026",
    score: "CGPA 8.5 / 10",
    location: "Nellore",
  },
  {
    id: "inter",
    school: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "May 2020 – Jun 2022",
    score: "851 / 1000",
    location: "Andhra Pradesh",
  },
  {
    id: "ssc",
    school: "Saint Pauls High School",
    degree: "SSC",
    period: "May 2019 – May 2020",
    score: "584 / 600",
    location: "Andhra Pradesh",
  },
];

export const certifications = [
  { id: "sn", name: "ServiceNow Administrator", issuer: "Metaforge", year: "2024" },
  { id: "da", name: "Data Analytics Certification", issuer: "Pantech Solutions", year: "2024" },
  { id: "cn", name: "Coding Ninjas Master Badge", issuer: "Coding Ninjas", year: "2024" },
];

export const achievements = [
  { id: "a1", title: "1st Place — Tech Fest", detail: "Won inter-college technical competition." },
  { id: "a2", title: "AIR 3606 — Internship Studio", detail: "All-India ranking in national coding test." },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
