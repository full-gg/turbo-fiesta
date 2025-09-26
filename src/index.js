import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from "./Map/Map.tsx"
import Bank from "./Map/Bank.tsx"
import Institute from "./Map/Institute.tsx"
import Barber from "./Map/Barber.tsx"
import App from './Main/App.tsx';

const Navigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Map" element={<Map />}/>
      <Route path="/Bank" element={<Bank />}/>
      <Route path="/Barber" element={<Barber />}/>
      <Route path="/Institute" element={<Institute />}/>
    </Routes>
  </Router>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);

