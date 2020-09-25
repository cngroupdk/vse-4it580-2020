import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from 'src/atoms/';
import { AuthProvider } from 'src/utils/auth';
import { EnhancedAppoloProvider } from 'src/utils/apollo';
import { Routes } from 'src/Routes';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedAppoloProvider>
          <ScrollToTop />
          <Routes />
        </EnhancedAppoloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
