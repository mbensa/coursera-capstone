import React from "react";
import "./social.css";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";

export default function Social(props) {
  const { socialClass } = props;

  return (
    <div className="socialContainer">
      <Facebook className="facebook social" />
      <Youtube className="youtube social" />
      <Twitter className="twitter social" />
      <Instagram className="instagram social" />
    </div>
  );
}
