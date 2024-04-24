import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "../App";
import { updateTimes } from "../App";

test('renders "Choose date" label', () => {
  render(<BookingForm />);
  const chooseDateLabel = screen.getByText("Choose date");
  expect(chooseDateLabel).toBeInTheDocument();
});

test("initializeTimes returns the correct initial available times", () => {
  const expectedAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const actualAvailableTimes = initializeTimes();

  expect(actualAvailableTimes).toEqual(expectedAvailableTimes);
});

test("updateTimes returns the same value as provided in the state", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const selectedDate = "2024-04-25";

  const updatedAvailableTimes = updateTimes(initialState, selectedDate);

  expect(updatedAvailableTimes).toEqual(initialState);
});
