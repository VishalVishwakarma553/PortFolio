import { CiLinkedin } from "react-icons/ci";
import "./Hamburger.css";
import { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
const Hamburger = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
          <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
          <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s",
          background: navOpen ? "#18181c" : "rgba(0, 0, 0, 0)"
        }}
      >
        <ul className="nav-link text-white">
          <li className="nav-item">
            <a
            href="#hero"
              className="text-white italic"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.9s" : "0s",
              }}
            >
              Home
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
            href="#about"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
            >
              About
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
            href="#technology"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}
            >
              Technology
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
            href="#project"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}
            >
              Projects
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
            href="#contact"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              Contact
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
        <div className="nav-social-media">
          <div className="flex gap-4 text-gray-300 ">
            <CiLinkedin className="h-8 w-8" />
            <FaGithub className="h-7 w-7" />
            <FaInstagram className="h-7 w-7" />
          </div>
        </div>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
