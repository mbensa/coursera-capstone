import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Text from "./Text";
import Footer from "./Footer";
import "./bookingForm.css";

function BookingForm({
  date,
  setDate,
  name,
  setName,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  updateTimes,
  submitForm, // Receive submitForm as a prop
}) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
    name: "",
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Check if all form fields are valid
    const isValid = name && date && time && guests >= 1 && occasion !== "";

    // Update form validity state
    setFormValid(isValid);
  }, [date, time, guests, occasion, name]);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      date: newDate,
    }));
    updateTimes(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      submitForm({ date, time, guests, occasion, name });
    }
  };

  return (
    <>
      <Nav />
      <main className="mainContainerBooking">
        <Text type="h1">Book a table</Text>
        <div className="restaurantImg"></div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label htmlFor="res-name">
            <Text type="h5">Name and Surname</Text>
          </label>
          <input
            type="text"
            id="res-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Name input"
          />
          <label htmlFor="res-date">
            <Text type="h5">Choose Date</Text>
          </label>
          <input
            data-testid="resDate"
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
            required
            aria-label="Date Selection"
          />
          <label htmlFor="res-time">
            <Text type="h5">Choose Time</Text>
          </label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-label="Time Selection"
          >
            {availableTimes.map((availableTime, index) => (
              <option key={index}>{availableTime}</option>
            ))}
          </select>
          <label htmlFor="guests">
            <Text type="h5">Number of Guests</Text>
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
            aria-label="Guests Selection"
          />
          <label htmlFor="occasion">
            <Text type="h5">Occassion</Text>
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            aria-label="Occasion Selection"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input
            className="submitBtn"
            type="submit"
            value="Make Your reservation"
            disabled={!formValid}
            aria-label="Submit Reservation"
          />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default BookingForm;
