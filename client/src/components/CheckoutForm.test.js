import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const utils = render(<CheckoutForm />);
    const firstNameInput = utils.getByPlaceholderText(/firstName/i);
    const lastNameInput = utils.getByPlaceholderText(/lastName/i);
    const addressInput = utils.getByPlaceholderText(/address/i);
    const cityInput = utils.getByPlaceholderText(/city/i);
    const stateInput = utils.getByPlaceholderText(/state/i);
    const zipInput = utils.getByPlaceholderText(/zip/i);

    fireEvent.change(firstNameInput, { target: {value: 'Throckmorton'}});
    fireEvent.change(lastNameInput, { target: {value: 'Danger'}});
    fireEvent.change(addressInput, { target: {value: 'address'}});
    fireEvent.change(cityInput, { target: {value: 'Downtown'}});
    fireEvent.change(stateInput, { target: {value: 'Coolsville'}});
    fireEvent.change(zipInput, { target: {value: '973333'}});

    expect(firstNameInput.value).toBe('Throckmorton');
    expect(lastNameInput.value).toBe('Danger');
    expect(addressInput.value).toBe('address');
    expect(cityInput.value).toBe('Downtown');
    expect(stateInput.value).toBe('Coolsville');
    expect(zipInput.value).toBe('973333');

});
