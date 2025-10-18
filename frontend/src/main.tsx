
import React from 'react'; import { createRoot } from 'react-dom/client'; import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Dashboard from './pages/Dashboard'; import './styles.css'; function App(){ return (<BrowserRouter><div><Routes><Route path='/' element={<Dashboard/>} /></Routes></div></BrowserRouter>); } createRoot(document.getElementById('root')!).render(<App />);
