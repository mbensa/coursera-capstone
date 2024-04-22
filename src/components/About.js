import React from "react";
import Text from "./Text";
import "./about.css";
import useMobile from "../hooks/useMobile";

export default function About() {
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <section>
        <div className="aboutImgContainer"></div>
        <div className="aboutTextContainer">
          <Text type="h1">Little Lemon</Text>
          <Text type="h2">Chicago</Text>
          <Text type="h5">
            Little Lemon is run by two famous chefs, Mario and Adrian. The
            restaurant has opened its doors in 2003. We serve Mediterranean food
            with a modern twist.{" "}
          </Text>
        </div>
      </section>
    );
  } else {
    return (
      <section className="aboutContainer">
        <div className="aboutTextContainer">
          <Text type="h1">Little Lemon</Text>
          <Text type="h2">Chicago</Text>
          <Text type="p">
            Little Lemon is run by two famous chefs, Mario and Adrian. The
            restaurant has opened its doors in 2003. We serve Mediterranean food
            with a modern twist.{" "}
          </Text>
        </div>
        <div className="aboutImgContainer"></div>
      </section>
    );
  }
}
