import "./Reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Wildlife from "./Pages/Wildlife/Wildlife";
import data from "./data.json"
import { useState } from "react";


function App() {
  const [animalData, setAnimalData] =useState(data);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wildlife" element={<Wildlife animalData={animalData}/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
