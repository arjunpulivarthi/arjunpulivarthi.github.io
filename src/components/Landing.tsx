import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const heroPreset: "balanced" | "editorial" | "compact" | "executivePanel" = "executivePanel";
  const roles = [
    "ENTREPRENEUR",
    "FULL STACK\nENGINEER",
    "CTO",
    "RESEARCHER",
    "INNOVATOR",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <>
      <div className={`landing-section hero-${heroPreset}`} id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h2 className="landing-name">
              ARJUN
              <br />
              <span>PULIVARTHI</span>
            </h2>
          </div>
          <div className="landing-info">
            <h3>AI/ML Engineer &amp;</h3>
            <div className="landing-role-switch" aria-label="role-switch">
              <h2
                key={roleIndex}
                className={`landing-info-h2 landing-role-current ${
                  roles[roleIndex].includes("\n") ? "is-multiline" : "is-singleline"
                }`}
              >
                {roles[roleIndex].split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx === 0 && roles[roleIndex].includes("\n") ? <br /> : null}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
