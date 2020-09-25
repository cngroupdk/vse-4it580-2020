import React from 'react';

import { Button, Heading } from 'src/atoms';

export function Practical01() {
  return (
    <div>
      <Heading>Practical 01</Heading>
      <p>Hello!</p>
      <Button onClick={() => alert('Button Pressed!')}>Press Me</Button>
    </div>
  );
}
