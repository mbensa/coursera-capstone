import React from "react";
import Text from "./Text";
import "./card.css";
import delivery from "../assets/delivery.jpg";
import Button from "./Button";

export default function Card() {
  return (
    <section className="sectionContainer">
      <Text type="h2">This Weeks Specials</Text>
      <div className="cardMainContainer">
        <div className="cardContainer">
          <div className="imgContainer imgOne"></div>
          <div className="textContainer">
            <div className="dishTitle">
              <Text type="h5">Greek Salad</Text>
              <Text type="h6" className="dishPrice">
                $12.99
              </Text>
            </div>
            <Text type="p">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </Text>
            <div className="deliveryContainer">
              <Text type="h6" className="deliveryText">
                Order a delivery
              </Text>
              <img src={delivery} alt="delivery motorbike" />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="imgContainer imgTwo"></div>
          <div className="textContainer">
            <div className="dishTitle">
              <Text type="h5">Bruschetta</Text>
              <Text type="h6" className="dishPrice">
                $7.99
              </Text>
            </div>
            <Text type="p">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </Text>
            <div className="deliveryContainer">
              <Text type="h6" className="deliveryText">
                Order a delivery
              </Text>
              <img src={delivery} alt="delivery motorbike" />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="imgContainer imgThree"></div>
          <div className="textContainer">
            <div className="dishTitle">
              <Text type="h5">Lemon Dessert</Text>
              <Text type="h6" className="dishPrice">
                $5.00
              </Text>
            </div>
            <Text type="p">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </Text>
            <div className="deliveryContainer">
              <Text type="h6" className="deliveryText">
                Order a delivery
              </Text>
              <img src={delivery} alt="delivery motorbike" />
            </div>
          </div>
        </div>
      </div>
      <Button>Online Menu</Button>
    </section>
  );
}
