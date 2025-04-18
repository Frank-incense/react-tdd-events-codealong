import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

// Code tests here
// Test that the initial page load is as expected.
test("pizza checkbox is initially unchecked", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

    expect(addPepperoni).not.toBeChecked();
})

test("toppings list initially contains only cheese", () => {
    render(<App />);

    expect(screen.getAllByRole("listitem").length).toBe(1);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
})
// Test that the checkbox triggers and event
test("checkboxes become checked when user clicks them", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

    userEvent.click(addPepperoni)

    expect(addPepperoni).toBeChecked();

});

test("topping appears in toppings list when checked", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

    userEvent.click(addPepperoni);

    expect(screen.getAllByRole("listitem").length).toBe(2);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();
});

// Test the effect of clicking the check box a second time
