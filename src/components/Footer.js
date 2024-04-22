import React from "react";
import Social from "./Social";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <Logo />
      <Social />
    </footer>
  );
}
