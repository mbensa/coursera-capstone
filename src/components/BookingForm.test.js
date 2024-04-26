import { fireEvent, render, act } from "@testing-library/react";
import BookingForm from "./BookingForm";
import fakeAPI from "./FakeAPI";
import { MemoryRouter } from "react-router-dom";
// import { initializeTimes } from "../App";
// import { updateTimes } from "../App";

const props = {
  date: new Date("2024-01-01"),
  name: "foo",
  time: "",
  guests: 1,
  occasion: "birthday",
  availableTimes: fakeAPI.fetchAPI(new Date("2024-01-01")),
};

describe("<BookingForm />", () => {
  it("should render", () => {
    const { asFragment } = render(<BookingForm {...props} />, {
      wrapper: MemoryRouter,
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders "Choose date" label', () => {
    const { getByLabelText } = render(<BookingForm {...props} />, {
      wrapper: MemoryRouter,
    });

    expect(getByLabelText("Choose Date")).toBeInTheDocument();
  });

  it("updateTimes returns the same value as provided in the state", () => {
    const mockedDate = new Date("2024-01-01T22:42:16.652Z");
    jest.spyOn(global, "Date").mockImplementation(() => mockedDate);

    const selectedDate = "2024-04-25";
    const updateTimesSpy = jest.fn();

    const { getByTestId } = render(
      <BookingForm {...props} updateTimes={updateTimesSpy} />,
      { wrapper: MemoryRouter }
    );

    act(() => {
      fireEvent.change(getByTestId("resDate"), {
        target: { value: selectedDate },
      });
    });

    expect(updateTimesSpy).toHaveBeenCalledWith(selectedDate);
  });
});
