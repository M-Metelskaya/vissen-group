import React, { useEffect } from "react";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/navbar/Navbar";
import { TabCategories } from "./components/technologies/TabCategories";
import { Gradient } from "./Gradient";
import "./App.css";

function App() {
  useEffect(() => {
    const gradient: any = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <div className="App">
      <canvas
        id="gradient-canvas"
        data-js-darken-top
        data-transition-in
      ></canvas>
      <NavBar />
      <Banner />
      <TabCategories />
    </div>
  );
}

export default App;
