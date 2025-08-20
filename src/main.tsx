import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { ProfileContextProvider } from './app/context/ProfileContextProvider.tsx';
import App from './App.tsx';

import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <ProfileContextProvider>
          <App />
        </ProfileContextProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
