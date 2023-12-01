import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Input from '../../components/input/Input';

test("render input", () => {
    const {getByTestId} = render(<Input data-testid="input-text" type="text"/>);
    const inputEl = getByTestId("input-text");

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
});

test('Input should display the password correctly', () => {
    const {getByTestId} = render(<Input data-testid="input-password" type="password"/>);
    const inputEl = getByTestId("input-password");
    const passwordInput = inputEl.querySelector('input[type="password"]');
    const icon = inputEl.querySelector('.icon');

    fireEvent.click(icon);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(icon);
    expect(passwordInput).toHaveAttribute('type', 'password');
});