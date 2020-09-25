import React from 'react';

import { Heading, Link, MainSection } from 'src/atoms/';
import { SignUpForm, TopNavigation } from 'src/organisms/';
import { route } from 'src/Routes';

export function SignUpTemplate({ isLoading, error, onSubmit }) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
          className="mt3"
        >
          <div className="lh-copy">
            or{' '}
            <Link className="f5 dark-green" to={route.signIn()}>
              Sign In
            </Link>
          </div>
        </SignUpForm>
      </MainSection>
    </>
  );
}
