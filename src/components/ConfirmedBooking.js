import React from "react";
import Text from "./Text";
import tick2 from "../assets/tick2.jpg";
import "./confirmedBooking.css";

export default function ConfirmedBooking() {
  return (
    <div className="confirmedBookingContainer">
      <img src={tick2} alt="tick confirming reservation" />
      <Text type="h2">Thank you</Text>
      <Text type="p">Your booking has been confirmed.</Text>
    </div>
  );
}
