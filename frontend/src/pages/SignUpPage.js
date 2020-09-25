import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { SignUpTemplate } from 'src/templates/SignUpTemplate';
import { useAuth } from 'src/utils/auth';

const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $name: String!
    $password: String!
    $userName: String!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      userName: $userName
    ) {
      user {
        id
        name
        userName
        profileImageUrl
      }
      token
    }
  }
`;

export function SignUpPage() {
  const auth = useAuth();
  const history = useHistory();
  const [signupRequest, signupRequestState] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup: { user, token } }) => {
      auth.signin({ token, user });
      history.replace('/');
    },
    onError: () => {},
  });

  const handleSignUpFormSubmit = useCallback(
    (variables) => {
      signupRequest({ variables });
    },
    [signupRequest],
  );

  return (
    <SignUpTemplate
      isLoading={signupRequestState.loading}
      error={signupRequestState.error}
      onSubmit={handleSignUpFormSubmit}
    />
  );
}
