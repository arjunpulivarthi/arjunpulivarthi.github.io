import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CTO & Engineering Lead</h4>
                <h5>UniGrid Startup</h5>
              </div>
              <h3>Jan 2025 – NOW</h3>
            </div>
            <p>
              Lead architect of backend systems ensuring platform scalability, security, and fault-tolerant design using Flask, MongoDB, and SQLite. Led development of integrated Parent, Teacher, and Student apps with real-time alerts and analytics dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>NIT Puducherry</h5>
              </div>
              <h3>May 2025</h3>
            </div>
            <p>
              Contributing to AI/ML-based systems development for heavy vehicles. Focused on literature review, data preprocessing, and machine learning model implementation with publication-focused outcomes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chairperson, IEEE Student Branch</h4>
                <h5>Dayananda Sagar University</h5>
              </div>
              <h3>Jan 2024 – Jan 2025</h3>
            </div>
            <p>
              Built IEEE Student Community, led international tech conferences, speaker sessions, and innovation forums. Oversaw strategic planning, member engagement, and collaboration with global IEEE chapters.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chairperson, IEEE CIS Chapter</h4>
                <h5>Dayananda Sagar University</h5>
              </div>
              <h3>Dec 2023 – Apr 2024</h3>
            </div>
            <p>
              Organized AI/ML technical workshops, coding competitions, and expert lectures. Managed content curation, logistics, and cross-departmental coordination for high-impact events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
