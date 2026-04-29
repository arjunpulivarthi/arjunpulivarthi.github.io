import { useState } from "react";

const skillSections = [
  {
    group: "backend",
    title: "Backend",
    items: [
      "Python",
      "Java",
      "C",
      "Flask",
      "Streamlit",
      "Tkinter",
      "REST APIs",
      "WebSockets",
      "Apache Kafka",
      "Scapy",
    ],
  },
  {
    group: "frontend",
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Bootstrap",
    ],
  },
  {
    group: "database",
    title: "Database",
    items: ["MongoDB", "MySQL", "SQLite", "SQL"],
  },
  {
    group: "aiml",
    title: "AI/ML",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "CNN",
      "LSTM",
      "XGBoost",
      "Logistic Regression",
      "HatBERT",
      "NLP (NLTK, Dialogflow)",
      "Recommendation Systems",
      "Time Series Forecasting",
      "Explainable AI (SHAP, LIME)",
      "Feature Engineering",
      "Image Segmentation",
      "Thresholding",
      "GLCM/LBP",
      "Entropy-based Detection",
    ],
  },
  {
    group: "tools",
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "PyCharm",
      "VS Code",
      "Arduino IDE",
      "Firebase",
      "Google Cloud Platform",
      "Excel",
      "Streamlit Dashboards",
      "Heatmaps",
      "Confusion Matrices",
      "Arduino",
      "NodeMCU",
      "RFID/NFC",
      "Thermal Printer Integration",
      "IoT Sensors",
    ],
  },
  {
    group: "soft",
    title: "Soft Skills",
    items: [
      "Team Management",
      "Hackathon Organization",
      "Cross-Functional Collaboration",
      "Technical Communication",
      "Strategic Planning",
      "Public Speaking",
      "Mentoring Peers",
      "Client Interaction",
    ],
  },
];
const TechStack = () => {
  const [isActive] = useState(false);

  void isActive;

  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <p className="techstack-subtitle">
        AI/ML, full-stack engineering, cloud systems, and embedded intelligence
      </p>
      <div className="techstack-meta techstack-meta-open">
        {skillSections.map((section) => (
          <div key={section.title} className="techstack-group">
            <h3>{section.title}</h3>
            <div className="techstack-chip-grid techstack-chip-grid-open">
              {section.items.map((item) => (
                <span key={item} className="techstack-chip techstack-chip-open">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
