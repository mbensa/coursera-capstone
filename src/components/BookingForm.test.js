import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "../pages/BookingPage";
import { updateTimes } from "../pages/BookingPage";

test("renders choose date label", () => {
  render(<BookingForm />);
  const chooseDateLabel = screen.getByText(/Choose date/i);
  expect(chooseDateLabel).toBeInTheDocument();
});

test("initializeTimes returns correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test("updateTimes returns the same value provided in the state", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectedDate = "2024-04-24"; // Arbitrary date for testing
  const updatedTimes = updateTimes(selectedDate, initialState);
  expect(updatedTimes).toEqual(initialState);
});
