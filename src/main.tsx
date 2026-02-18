import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import '@github/spark/spark';

import App from './App.tsx';
import { ErrorFallback } from './ErrorFallback.tsx';
import { ThemeProvider } from './context/ThemeContext';

import './index.css';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <ErrorBoundary FallbackComponent={ErrorFallback}>
   <ThemeProvider>
    <App />
   </ThemeProvider>
  </ErrorBoundary>
 </StrictMode>,
);
