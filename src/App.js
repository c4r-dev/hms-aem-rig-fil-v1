import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartRaven from './components/startRaven';
import WelcomePage from './components/welcomePage';
import SelectPage from './components/selectPage';
import ClinicalTrial1 from './components/clinicalTrial1';
import ClinicalTrial2 from './components/clinicalTrial2';
import ClinicalTrial3 from './components/clinicalTrial99';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartRaven />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/selectPage" element={<SelectPage />} />
          <Route path="/clinicalTrial1" element={<ClinicalTrial1 />} />
          <Route path="/clinicalTrial2" element={<ClinicalTrial2 />} />
          <Route path="/clinicalTrial3" element={<ClinicalTrial3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}