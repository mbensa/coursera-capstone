import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
