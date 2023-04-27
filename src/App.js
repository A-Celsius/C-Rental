import React from 'react';
import About from "./pages/About";
import Services from "./pages/Services";
import Car from "./pages/Car";
import CarSingle from "./pages/CarSingle";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Index from "./pages/Index";

import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";

function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/index" element={<Index/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/car" element={<Car/>} />
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
