import React from 'react';

import { Button, Spinner } from 'src/atoms/';

export function LoadingButton({ loading, children, disabled, ...props }) {
  return (
    <Button {...props} disabled={loading || disabled}>
      {children} {loading && <Spinner className="ml3" />}
    </Button>
  );
}
