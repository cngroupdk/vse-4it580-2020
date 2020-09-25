import React from 'react';

import { MainSection } from 'src/atoms/';
import { TopNavigation } from 'src/organisms/';

export function PageWrapper({ children }) {
  return (
    <>
      <TopNavigation />
      <MainSection>{children}</MainSection>
    </>
  );
}
