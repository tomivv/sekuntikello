import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";

test("start timer", async () => {
  render(<App />);

  const start = screen.getByText(/start/i);
  expect(start).toBeInTheDocument();

  userEvent.click(start);

  await act(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    const endTime = screen.getByTestId("time");

    expect(endTime).not.toHaveValue("0:0.0");

    const stop = screen.getByText(/stop/i);
    expect(stop).toBeInTheDocument();
    userEvent.click(stop);
  });
});

test("Save times", async () => {
  render(<App />);

  const start = screen.getByText(/start/i);
  expect(start).toBeInTheDocument();

  userEvent.click(start);

  await act(async () => {
    await new Promise((r) => setTimeout(r, 1000));

    // etsitään input
    const input = screen.getByPlaceholderText(/title/i);
    expect(input).toBeInTheDocument();

    // etsitään nappi
    const saveBtn = screen.getByText("save");
    expect(saveBtn).toBeInTheDocument();

    // kirjoitetaan ja painetaan nappia
    userEvent.type(input, "test time");
    userEvent.click(saveBtn);

    // tarkistetaan että tallentuu oikein
    const time = screen.getByText(/test time/i);
    expect(time).toBeInTheDocument();
  });
});

test("empty list message", () => {
  render(<App />);

  const message = screen.getByText(/Currently there are no times!/i);
  expect(message).toBeInTheDocument();
});
