import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

import { HomeTemplate } from 'src/templates/HomeTemplate';
import { useAuth } from 'src/utils/auth';

const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      id
      createdAt
      user {
        id
        name
        userName
        profileImageUrl
      }
      text
    }
  }
`;

const QUACK_MUTATION = gql`
  mutation Quack($userId: Int!, $text: String!) {
    addQuack(userId: $userId, text: $text) {
      id
    }
  }
`;

export function HomePage() {
  const { user } = useAuth();

  const quacksState = useQuery(QUACKS_QUERY);
  const [quackFormText, setQuackFormText] = useState('');

  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    QUACK_MUTATION,
    {
      onCompleted: () => {
        setQuackFormText('');
        quacksState.refetch();
      },
      onError: () => {},
    },
  );

  const submitQuack = ({ text }) => {
    quackMutationRequest({ variables: { text, userId: user.id } });
  };

  const quackFormState = {
    error: quackMutationRequestState.error,
    loading: quackMutationRequestState.loading,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: submitQuack,
  };

  return (
    <HomeTemplate
      data={quacksState.data}
      error={quacksState.error}
      loading={quacksState.loading}
      refetchQuacks={() => quacksState.refetch()}
      quackFormState={quackFormState}
      currentUser={user}
    />
  );
}
