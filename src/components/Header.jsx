/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function Header({ match }) {
  return (
    <header className="header bg-white shadow sm:bg-transparent sm:shadow-none px-3  sm:px-10">
      <a
        className="sm:pt-5"
        href="https://dcs-iota.vercel.app/"
        // target="_blank"
        rel="noreferrer"
      >
        <img
          className="my-2"
          src="/logo.webp"
          width={`${match ? "60" : "100"}`}
          height={`${match ? "60" : "100"}`}
        />
        {/* <h1 className="font-bold text-3xl text-primary-800 ">DCS</h1> */}
      </a>
      <nav className="flex items-center gap-10">
        {/* <ul className="flex text-lg gap-10 items-center">
          <li>
            <Link to="/" className="text-primary-800">
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-800">
              Our Programs
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-800">
              Testimonial
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-800">
              FAQ
            </Link>
          </li>
        </ul> */}
        <button className="border py-3 px-5 rounded-lg shadow bg-primary-700 text-white">
          <Link to="https://api.whatsapp.com/send?phone=2349032565436&text=My%20name%20is%20________%2C%20and%20I%20would%20like%20to%20inquire%20about%20______.">
            {" "}
            Join Us Now
          </Link>
        </button>
      </nav>
    </header>
  );
}
