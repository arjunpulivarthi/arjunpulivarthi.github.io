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
                <h4>Chief Technology Officer</h4>
                <h5>Aansh Group, Bengaluru</h5>
              </div>
              <h3 className="career-period">Jan 2026<br />– Present</h3>
            </div>
            <p>
              Leading end-to-end technology architecture and product development across AI, IoT, and enterprise systems. Designed scalable backend platforms, cloud infrastructure, and secure networking for deployments including surveillance, automation, and access-control solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>NIT Puducherry, Karaikal</h5>
              </div>
              <h3 className="career-period">Apr 2025<br />– Jul 2025</h3>
            </div>
            <p>
              Assisted in AI/ML research systems for heavy-vehicle applications, contributing to literature review, preprocessing, and model implementation in collaboration with research mentors and graduate students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & Engineering Lead</h4>
                <h5>Kynetic Labs, Bengaluru</h5>
              </div>
              <h3 className="career-period">Jan 2025<br />– Present</h3>
            </div>
            <p>
              Leading backend architecture, platform security, and fault-tolerant design using Flask, MongoDB, and SQLite. Managed technical hiring, sprint planning, and MVP deployment for institutional pilot products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chairperson, IEEE Student Branch</h4>
                <h5>Dayananda Sagar University</h5>
              </div>
              <h3 className="career-period">Jan 2024<br />– Jan 2025</h3>
            </div>
            <p>
              Built the IEEE student community and led conferences, speaker sessions, and innovation forums. Oversaw strategy, member engagement, and collaboration with global IEEE chapters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
