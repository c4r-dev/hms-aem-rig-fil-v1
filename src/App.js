import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartRaven from './components/startRaven';
import WelcomePage from './components/welcomePage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartRaven />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}