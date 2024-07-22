import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NewRepositorie from './pages/NewRepositorie.tsx';
import './index.css';

import { SelectedUserProvider } from './context/SelectedUserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectedUserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/newrepository" element={<NewRepositorie />} />
        </Routes>
      </SelectedUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
