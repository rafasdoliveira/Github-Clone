import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NewRepositorie from './pages/NewRepositorie.tsx';
import './index.css';

import { UserProvider } from './context/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/newrepository" element={<NewRepositorie />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
