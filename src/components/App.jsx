import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import MainComponent from './MainComonent.jsx';
import NotFoundComponent from './NotFoundComponent.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<MainComponent />} />
    <Route path="login" element={<LoginComponent />} />
    <Route path="*" element={<NotFoundComponent />} />
  </Routes>
);

export default App;
