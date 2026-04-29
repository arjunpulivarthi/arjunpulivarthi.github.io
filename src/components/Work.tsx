import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title:
      "Semantic Similarity Based Academic Answer Evaluator using ML and BI",
    category: "Capstone Project — Team Size: 4",
    tools:
      "Python, NLTK, spaCy, Scikit-learn, TensorFlow, SBERT, Streamlit, Power BI",
    image: "/images/preview1.png",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Federated GenAI for Banking Privacy",
    category: "Course Minor Project — Team Size: 1",
    tools:
      "Python, Scikit-learn, Federated Learning (FedAvg), JavaScript, HTML/CSS",
    image: "/images/bond.png",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "AI Traffic Signal Management",
    category: "Course Minor Project — Team Size: 2",
    tools: "Python, Kubernetes, GCP, Pandas, NumPy, Matplotlib, JSON",
    image: "/images/callhq.png",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Stock Market Price Predictor",
    category: "Course Minor Project — Team Size: 1",
    tools: "Python, Pandas, Scikit-learn, XGBoost, LSTM, Streamlit",
    image: "/images/sapphire.png",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "AI-Based Defect Detection in Ultrasonic Polymer Welding",
    category: "Course Minor Project — Team Size: 4",
    tools:
      "Python, OpenCV, NumPy, Scikit-learn, Matplotlib | 93% classification accuracy | NDE 4.0 research",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Deepfake Detection Software Using Deep Learning",
    category: "Personal Project — Team Size: 1",
    tools:
      "Python, TensorFlow, Keras, OpenCV, Flask, PIL, Matplotlib",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Network Threat Identifier",
    category:
      "Hackathon Project — PES University AI/ML in Cybersecurity 2025 — 5th Place — Team Size: 4",
    tools:
      "Python, Flask, Scapy, MongoDB, TensorFlow, CNN, Apache Kafka",
    image: "/images/orrdr.png",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Gesture Articulation and Recognition",
    category: "Personal Project — Team Size: 1",
    tools: "Python, OpenCV, MediaPipe, NumPy, TensorFlow",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Urban Forge Solutions - AI Toolkit for Urban Planning",
    category:
      "Hackathon Project — RV Hack4Soc 2.0 — Recognized for Innovation — Team Size: 4",
    tools:
      "Python, Flask, OpenCV, Scikit-learn, Google Maps API, JavaScript, HTML/CSS, Dialogflow",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "IoT-Based AI Farming System",
    category:
      "Hackathon Project — Reva Smart Agro Hackathon 2023 — 3rd Place — Team Size: 4",
    tools:
      "Python, Arduino, TensorFlow, Firebase, Dialogflow, OpenWeatherMap API, IoT Sensors",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Virtual Meeting Analysis Platform",
    category: "Hackathon Project — NIT Surathkal — Team Size: 4",
    tools:
      "Python, Flask, HatBERT, NLTK, WebSockets, HTML, CSS, JavaScript, REST APIs, Google Cloud, Kaggle",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title:
      "Sakhi Samriddhi – AI-Based Menstrual Health Prediction and Chatbot System",
    category:
      "Hackathon Project — KLE GirlGeekHack 2023 — 1st Place — Team Size: 4",
    tools: "Python, TensorFlow, Flask, Dialogflow, HTML/CSS, Bootstrap",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Cafe Management System",
    category: "Debut Project — GUI-Based Billing and Order Application",
    tools: "Desktop Application Development",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "Timetable Maker",
    category: "Debut Project — Automated Class Schedule Generator",
    tools: "Automation Logic and Scheduling",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
  {
    title: "AI IPL Win Predictor",
    category:
      "Freelance Project — Real-Time Cricket Match Outcome Forecasting — Jan 2025",
    tools: "Python, Pandas, Scikit-learn, Streamlit, Matplotlib",
    image: "/images/placeholder.webp",
    link: "https://github.com/arjunpulivarthi",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-list">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                className={`work-row ${reversed ? "work-row-reverse" : ""}`}
                key={project.title}
              >
                <div className="work-info">
                  <p className="work-number">0{index + 1}</p>
                  <h3>{project.title}</h3>
                  <p className="work-category">{project.category}</p>
                  <p className="work-tools">{project.tools}</p>
                  <a
                    className="work-github-btn"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                </div>

                <a
                  className="work-image-wrap"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  <img src={project.image} alt={project.title} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
