import { useEffect, useRef, useState } from "react";
import { MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const connectRef = useRef<HTMLDivElement | null>(null);
  const [connectHeight, setConnectHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = connectRef.current;
    if (!el) return;

    const update = () => setConnectHeight(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-shell">
        <div className="contact-head">
          <h3>Contact</h3>
          <p>Let’s build something real. I usually respond within 24 hours.</p>
        </div>

        <div className="contact-grid">
          <div ref={connectRef} className="contact-panel contact-info-panel">
            <h4>Connect</h4>
            <a href="mailto:arjunpulivarthi@ieee.org" target="_blank" rel="noreferrer" data-cursor="disable">arjunpulivarthi@ieee.org</a>
            <a href="mailto:arpulivarthi@gmail.com" target="_blank" rel="noreferrer" data-cursor="disable">arpulivarthi@gmail.com</a>
            <a href="tel:+916364149933" data-cursor="disable">+91 6364149933</a>
            <a href="tel:+18559515955" data-cursor="disable">+1 (855) 951-5955</a>

            <h4>Social</h4>
            <div className="contact-social-grid">
              <a aria-label="GitHub" href="https://github.com/arjunpulivarthi" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social-icon"><FaGithub /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arjunpulivarthi/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social-icon"><FaLinkedinIn /></a>
              <a aria-label="LeetCode" href="https://leetcode.com/arjunpulivarthi" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social-icon"><FaYoutube /></a>
              <a aria-label="Portfolio" href="https://arjunpulivarthi.tech" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social-icon"><FaInstagram /></a>
            </div>
          </div>

          <div
            className="contact-panel contact-form-panel"
            style={connectHeight ? { minHeight: `${connectHeight}px` } : undefined}
          >
            <h4>Get In Touch</h4>
            <form className="contact-form" action="mailto:arjunpulivarthi@ieee.org" method="post" encType="text/plain">
              <div className="contact-form-split">
                <div className="contact-form-row">
                  <input id="name" name="name" type="text" placeholder="Your full name" required />
                </div>
                <div className="contact-form-row">
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="contact-form-row">
                <input id="subject" name="subject" type="text" placeholder="Project / Collaboration" required />
              </div>
              <div className="contact-form-row">
                <textarea id="message" name="message" rows={6} placeholder="Tell me what you want to build..." required />
              </div>
              <button type="submit" data-cursor="disable">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="contact-footer-separated">
        <div className="footer-main">
          Designed and Developed by <span>Arjun Pulivarthi</span>
        </div>
        <div className="contact-footer-copy">
          <MdCopyright /> 2026
        </div>
      </footer>
    </section>
  );
};

export default Contact;
