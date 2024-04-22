import React from "react";
import "./bookingForm.css";
import Text from "../components/Text";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const handleDateChange = (e) => {
    // Dispatch state change when the date field is changed
    updateTimes(e.target.value);
  };

  const handleTimeChange = (e) => {
    // Handle time change
  };

  const handleGuestsChange = (e) => {
    // Handle number of guests change
  };

  const handleOccasionChange = (e) => {
    // Handle occasion change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted!");
  };

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit}
      aria-labelledby="booking-form"
    >
      <label htmlFor="res-date">
        <Text type="h5">Choose date</Text>
      </label>
      <input
        type="date"
        id="res-date"
        onChange={handleDateChange}
        aria-label="Choose date"
        aria-required="true"
      />

      <label htmlFor="res-time">
        <Text type="h5">Choose time</Text>
      </label>
      <select
        id="res-time"
        onChange={handleTimeChange}
        aria-label="Choose time"
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
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
        onChange={handleGuestsChange}
        aria-label="Number of guests"
        aria-required="true"
      />

      <label htmlFor="occasion">
        <Text type="h5">Occasion</Text>
      </label>
      <select
        id="occasion"
        onChange={handleOccasionChange}
        aria-label="Occasion"
      >
        <option value="Birthday">
          <Text type="p">Birthday</Text>
        </option>
        <option value="Anniversary">
          <Text type="p">Anniversary</Text>
        </option>
      </select>

      <input
        className="submitButton"
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation"
      />
    </form>
  );
};

export default BookingForm;
