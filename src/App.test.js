import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App, { initializeTimes } from "./App";
import * as FAPI from "./components/FakeAPI";
import { useEffect } from "react";
import * as RN from "react-router-dom";

jest.mock("./components/BookingForm", () => {
  const React = jest.requireActual("react");

  return ({ submitForm }) => {
    React.useEffect(() => {
      submitForm?.();
    }, []);

    return "MockedBookingForm";
  };
});

describe("<App />", () => {
  it("should render", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should correctly initialize times", () => {
    jest.spyOn(Date, "now").mockReturnValue("2024-01-01");
    jest
      .spyOn(FAPI.default, "fetchAPI")
      .mockReturnValue([
        "--- Select a Time ---",
        "15:00",
        "15:30",
        "16:30",
        "17:30",
        "20:00",
        "21:00",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
      ]);

    const result = initializeTimes();

    expect(result).toEqual([
      "--- Select a Time ---",
      "15:00",
      "15:30",
      "16:30",
      "17:30",
      "20:00",
      "21:00",
      "22:00",
      "22:30",
      "23:00",
      "23:30",
    ]);
  });

  it("should save form data to localStorage", () => {
    const setItemSpy = jest.fn();
    Storage.prototype.setItem = setItemSpy;

    const { getByText } = render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );

    expect(setItemSpy).toHaveBeenCalledTimes(1);

    expect(getByText("Your booking has been confirmed.")).toBeInTheDocument();
  });
});
