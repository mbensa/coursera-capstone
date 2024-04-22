import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Text from "../components/Text";
import "./bookingPage.css";

const BookingPage = () => {
  // Reducer function to manage availableTimes state
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // Logic to update availableTimes based on the selected date
        // For now, returning the same available times regardless of the date
        return action.availableTimes;
      default:
        return state;
    }
  };

  // Function to initialize availableTimes state
  const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // State variable for availableTimes using useReducer
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  // Function to update availableTimes based on the selected date
  const updateTimes = (selectedDate) => {
    // For now, just call dispatch with the same available times
    const times = initializeTimes(); // You can replace this with logic to calculate times based on selectedDate
    dispatch({ type: "UPDATE_TIMES", availableTimes: times });
  };

  return (
    <div>
      <Nav />
      <main className="mainContainer">
        <Text type="h1">Restaurant Booking</Text>
        <div className="bookingImg"></div>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
