// Mock data for Harika Katta's portfolio — replace with backend later

export const profile = {
  name: "Harika Katta",
  firstName: "Harika",
  lastName: "Katta",
  title: "Data Science & Machine Learning Engineer",
  tagline: "I build data-driven, scalable solutions — from predictive ML models to containerized deployment pipelines.",
  shortBio: "Motivated B.Tech graduate with strong foundations in data analytics, Python, machine learning, deep learning, and cloud / DevOps practices. I love turning messy data into reliable products.",
  longBio: "I'm Harika — a final-year B.Tech student at Geethanjali Institute of Science and Technology with a CGPA of 8.5. My focus areas are Machine Learning, Deep Learning, and modern DevOps practices. I've shipped projects ranging from a 95% accurate breast cancer classifier to a Faster R-CNN weapon-detection pipeline and a Dockerised CI/CD workflow. I'm now seeking an entry-level Data / ML Engineering role where I can build scalable solutions, learn from senior engineers, and contribute from day one.",
  location: "Nellore, Andhra Pradesh, India",
  email: "kattaharikadurgarao@gmail.com",
  phone: "+91-9347580293",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "#",
  avatar: "https://images.pexels.com/photos/36363694/pexels-photo-36363694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  available: true,
  yearsLearning: 4,
  projectsShipped: 6,
  certifications: 3,
};

export const stats = [
  { label: "CGPA", value: "8.5", suffix: "/10" },
  { label: "Projects shipped", value: "6", suffix: "+" },
  { label: "Best model accuracy", value: "95", suffix: "%" },
  { label: "Certifications", value: "3", suffix: "" },
];

export const skills = {
  languages: [
    { name: "Python", level: 92 },
    { name: "C", level: 78 },
    { name: "SQL", level: 80 },
  ],
  core: [
    { name: "Machine Learning", level: 88 },
    { name: "Deep Learning", level: 80 },
    { name: "DBMS", level: 82 },
    { name: "Cloud Fundamentals", level: 72 },
  ],
  tools: [
    "Git", "GitHub", "Docker", "VS Code", "Linux", "Power BI", "Scikit-learn", "OpenCV", "NumPy", "Pandas",
  ],
  soft: [
    "Analytical Thinking", "Problem Solving", "Adaptability", "Team Collaboration", "Clear Communication",
  ],
};

export const projects = [
  {
    id: "breast-cancer",
    title: "Breast Cancer Prediction",
    category: "Machine Learning",
    summary: "ML classifier that distinguishes malignant from benign tumors with 95% accuracy on the Wisconsin dataset.",
    description:
      "End-to-end ML pipeline covering data cleaning, feature engineering, model selection (Logistic Regression, Random Forest, SVM), hyper-parameter tuning, and evaluation via cross-validation. Confusion-matrix and ROC-AUC reporting included.",
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3NzA5NjgwOXww&ixlib=rb-4.1.0&q=85",
    tags: ["Python", "Scikit-learn", "Pandas", "EDA"],
    metrics: [{ label: "Accuracy", value: "95%" }, { label: "Precision", value: "94%" }],
    repo: "#",
    live: "#",
    year: "2024",
  },
  {
    id: "weapon-detection",
    title: "Weapon Detection — Faster R-CNN",
    category: "Deep Learning · Computer Vision",
    summary: "Real-time weapon detection in surveillance footage using a fine-tuned Faster R-CNN backbone.",
    description:
      "Annotated a custom image dataset, trained a Faster R-CNN with a ResNet-50 backbone, and tuned anchor scales / IoU thresholds. Integrated OpenCV for inference on video streams. Achieved 75% mAP on the validation split.",
    image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["PyTorch", "OpenCV", "Faster R-CNN", "Annotation"],
    metrics: [{ label: "mAP", value: "75%" }, { label: "FPS", value: "~12" }],
    repo: "#",
    live: "#",
    year: "2024",
  },
  {
    id: "cicd-docker",
    title: "CI/CD Pipeline with Docker",
    category: "DevOps",
    summary: "Automated build, test, and deploy pipeline for a containerised Python service.",
    description:
      "Designed a GitHub Actions workflow that lints, tests, builds a Docker image, and pushes it to a registry on every merge to main. Multi-stage Dockerfile reduced image size by ~40%.",
    image: "https://images.unsplash.com/photo-1774791242463-ad4fd6386cb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZmxvdyUyMGFic3RyYWN0fGVufDB8fHx8MTc3NzA5NjgxOXww&ixlib=rb-4.1.0&q=85",
    tags: ["Docker", "GitHub Actions", "Linux", "CI/CD"],
    metrics: [{ label: "Image size", value: "-40%" }, { label: "Deploy time", value: "~2 min" }],
    repo: "#",
    live: "#",
    year: "2025",
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
      "Worked on ITSM processes including incident and change management.",
      "Customised workflows, forms, and business rules to align with client SLAs.",
      "Managed user roles, ACLs, and system configurations across dev/test instances.",
    ],
    stack: ["ServiceNow", "ITSM", "JavaScript"],
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
