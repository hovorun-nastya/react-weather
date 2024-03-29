import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </>
);


