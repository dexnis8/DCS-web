import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header   px-10">
      <a
        className="brand"
        href="https://gsap.com"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img
          className="greensock-icon"
          src="https://gsap.com/_img/codepen/gsap-white.svg"
          width="100"
        /> */}
        <h1 className="font-bold text-3xl text-[#FFFCE1]">DSC</h1>
      </a>
      <nav>
        <ul className="text-blue-200">
          <li>
            <Link to="/">Boxes</Link>
          </li>
          <li>
            <Link to="/scroll">ScrollTrigger</Link>
          </li>
          <li>
            <Link to="/layers">Layers Section</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
