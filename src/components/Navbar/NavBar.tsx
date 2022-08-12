import "./navbar.css";
import logo from "../../Assets/Polygon.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar w-full  p-[25px] sm:px-[50px] flex justify-between items-center fixed z-40 bg-[#000] ">
      <div className="text-[#00e5e8] flex items-center">
        <HashLink to="#home" className="flex items-center" smooth>
          <img src={logo} className="w-10 logo-img" alt="" />
          <span className="glowText cursor-pointer relative text-2xl left-[-27px] top-[1px]">
            R
          </span>
        </HashLink>
      </div>

      <div
        onClick={() => setActive(!active)}
        className={`hamburger z-50  ${active && "is-active"} text-white`}
      >
        <div className="bar"></div>
      </div>

      {/* Toggle navbar starts */}
      <div className={`togglebar ${active ? " isactive" : "hidden"}`}>
        <aside className="  text-white flex-col items-center">
          <ol className="nav-items">
            <li className="glowText toggle-items" onClick={() => setActive(!active)}>
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li className="glowText toggle-items" onClick={() => setActive(!active)}>
              <HashLink to="#experience" smooth>
                Experience
              </HashLink>
            </li>
            <li className="glowText toggle-items" onClick={() => setActive(!active)}>
              <HashLink to="#work" smooth>
                Work
              </HashLink>
            </li>
            <li className="glowText toggle-items" onClick={() => setActive(!active)}>
              <HashLink to="#contact" smooth>
                Contact
              </HashLink>
            </li>
          </ol>
          <button className="resume-btn glowText border-[#00e5e8] text-[#00e5e8] rounded border-2 p-2 mt-5 text-sm  ">
            <a href={require("./RavirajResume.pdf")} download="Raviraj_SE_1OE">
              Resume
            </a>
          </button>
        </aside>
      </div>
      {/* Toggle navbar ends */}

      <div className="text-white hidden md:flex items-center">
        <ol className="flex nav-items">
          <li className="glowText">
            <HashLink to="#about" smooth>
              About
            </HashLink>
          </li>
          <li className="glowText">
            <HashLink to="#experience" smooth>
              Experience
            </HashLink>
          </li>
          <li className="glowText">
            <HashLink to="#work" smooth>
              Work
            </HashLink>
          </li>
          <li className="glowText">
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </li>
        </ol>
        <button className="resume-btn glowText border-[#00e5e8] text-[#00e5e8] rounded border-2 p-2 ml-9 text-sm  ">
          <a href={require("./RavirajResume.pdf")} download="Raviraj_SE_1OE">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};
