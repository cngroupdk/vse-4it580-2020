import React from 'react';

import { ErrorMessage } from 'src/atoms/';
import { SelectableQuack } from 'src/molecules/';

export function Practical03Template({
  quacksState,
  selectedQuackId,
  setSelectedQuackId,
}) {
  if (!quacksState.data && quacksState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {quacksState.error && (
        <ErrorMessage>Error: {quacksState.error.message}</ErrorMessage>
      )}

      <div>Selected quackId: {`${selectedQuackId}`}</div>
      <div>Loading: {`${quacksState.loading}`}</div>

      {quacksState.data?.quacks.map((quack) => (
        <SelectableQuack
          key={quack.id}
          quack={quack}
          isSelected={selectedQuackId === quack.id}
          onSelect={() => setSelectedQuackId(quack.id)}
        />
      ))}
    </>
  );
}
