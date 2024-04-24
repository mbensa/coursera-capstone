import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import MainPage from "./pages/MainPage";
import fakeAPI from "./components/FakeAPI";
import { Route, Routes } from "react-router-dom";

// Define reducer function to handle state changes
const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return initializeTimes(); // Initialize availableTimes
    case "UPDATE_TIMES":
      return updateTimes(state, action.payload); // Update availableTimes based on selected date
    default:
      return state;
  }
};

// Function to initialize availableTimes using the fake API
const initializeTimes = () => {
  // Create a Date object to represent today's date
  const today = new Date();
  // Call the fetchAPI function with today's date to fetch available times
  const availableTimes = fakeAPI.fetchAPI(today);
  // Return the fetched available times
  return availableTimes;
};

const updateTimes = (state, selectedDate) => {
  // Call the fetchAPI function with the selected date to fetch available times
  const availableTimes = fakeAPI.fetchAPI(selectedDate);

  // Return the fetched available times
  return availableTimes;
};

function App() {
  // Use reducer to manage state changes for availableTimes
  const [availableTimes, dispatch] = useReducer(
    updateTimesReducer,
    [],
    initializeTimes
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // useEffect to initialize availableTimes when component mounts
  useEffect(() => {
    dispatch({ type: "INITIALIZE_TIMES" });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle state change based on selected date
  const handleDateChange = (selectedDate) => {
    // Dispatch action to update availableTimes based on selectedDate
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
    setDate(selectedDate); // Update the date state
  };

  return (
    <div className="App">
      {/* Render BookingForm component with props */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              updateTimes={handleDateChange} // Pass handleDateChange as updateTimes
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
