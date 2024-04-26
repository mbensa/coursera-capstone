import { fireEvent, render, act } from "@testing-library/react";
import BookingForm from "./BookingForm";
import fakeAPI from "./FakeAPI";
// import { initializeTimes } from "../App";
// import { updateTimes } from "../App";

const props = {
  date: new Date("2024-01-01"),
  time: "",
  guests: 1,
  occasion: "birthday",
  availableTimes: fakeAPI.fetchAPI(new Date("2024-01-01")),
};

describe("<BookingForm />", () => {
  it("should render", () => {
    const { asFragment } = render(<BookingForm {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders "Choose date" label', () => {
    const { getByLabelText } = render(<BookingForm {...props} />);

    expect(getByLabelText("Choose date")).toBeInTheDocument();
  });

  it("updateTimes returns the same value as provided in the state", () => {
    const selectedDate = "2024-04-25";
    const updateTimesSpy = jest.fn();

    const { getByTestId } = render(
      <BookingForm {...props} updateTimes={updateTimesSpy} />
    );

    act(() => {
      fireEvent.change(getByTestId("resDate"), {
        target: { value: selectedDate },
      });
    });

    expect(updateTimesSpy).toHaveBeenCalledWith(selectedDate);
  });
});
