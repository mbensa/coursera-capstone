import React from "react";
import Nav from "./Nav";
import Text from "./Text";
import Button from "./Button";
import "./header.css";
import useMobile from "../hooks/useMobile";
import restaurantFood from "../assets/restaurantFood.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  const { isMobile } = useMobile();
  if (isMobile) {
    return (
      <header>
        <Nav />
        <div className="headerBg">
          <div className="mainContainer">
            <Text type="h1">Little Lemon</Text>
            <Text type="h2" className="textColor">
              Chicago
            </Text>
            <div className="description">
              <Text type="h4" className="textColor descriptionText">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes with a modern twist.
              </Text>
              <img
                src={restaurantFood}
                alt="a man holding a tray with food"
                className="headerImg"
              />
            </div>
            <Link to="/booking">
              <Button>Reserve a Table</Button>
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <Nav />
        <div className="headerBg">
          <div className="headerContainer">
            <div className="mainContainer">
              <Text type="h1">Little Lemon</Text>
              <Text type="h2" className="textColor">
                Chicago
              </Text>
              <Text type="h4" className="textColor descriptionTextMobile">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes with a modern twist.
              </Text>
              <Link to="/booking">
                <Button>Reserve a Table</Button>
              </Link>
            </div>
            <div>
              <img
                src={restaurantFood}
                alt="a man holding a tray with food"
                className="headerImg"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
