// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import '@mantine/core/styles.css'; // Estilos de Mantine
import { createTheme } from '@mantine/core';

const queryClient = new QueryClient();

const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    dark: [
      '#f1f1ff',
      '#d1d1ff',
      '#b1b1ff',
      '#9191ff', 
      '#7171ff', 
      '#5151ff', 
      '#1a1a2e',
      '#131326',
      '#0d0d1f',
      '#080814',
    ],
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);