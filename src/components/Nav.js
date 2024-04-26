import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Basket } from "../assets/basket.svg";
import Text from "./Text";
import "./nav.css";

export default function Nav() {
  const [toggle, setToggle] = React.useState(false);

  function toggleMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <nav className="navbar">
      <div
        className={`hamburger${toggle ? " active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Logo></Logo>
      <ul className={`nav-menu${toggle ? " active" : ""}`}>
        <li className="nav-item">
          <Text type="h5">Home</Text>
        </li>
        <li className="nav-item">
          <Text type="h5">About</Text>
        </li>
        <li className="nav-item">
          <Text type="h5">Menu</Text>
        </li>
        <li className="nav-item">
          <Text type="h5">Reservations</Text>
        </li>
        <li className="nav-item">
          <Text type="h5">Order Online</Text>
        </li>
        <li className="nav-item">
          <Text type="h5">Login</Text>
        </li>
      </ul>
      <Basket className="basketLogo" />
    </nav>
  );
}
