import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    // Native browser scrolling is used to avoid scroll lag from smoother timelines.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AP
        </a>
        <a
          href="https://www.linkedin.com/in/arjunpulivarthi/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/arjunpulivarthi
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
