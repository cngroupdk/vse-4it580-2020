import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpForm } from '../SignUpForm';

describe('SignUpForm', () => {
  it('should call `onSubmit` when user fills the form and clicks on Sign Up button', async () => {
    const handleSubmit = jest.fn();
    render(<SignUpForm onSubmit={handleSubmit} />);

    userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    userEvent.type(screen.getByLabelText(/username/i), 'jdoe');
    userEvent.type(screen.getByLabelText(/email/i), 'j@doe.com');
    userEvent.type(screen.getByLabelText('Password'), 'secret');
    userEvent.type(screen.getByLabelText(/password confirmation/i), 'secret');

    userEvent.click(screen.getByRole('button', /sign up/i));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          name: 'John Doe',
          userName: 'jdoe',
          email: 'j@doe.com',
          password: 'secret',
          passwordConfirmation: 'secret',
        },
        expect.anything(),
      );
    });
  });
});
