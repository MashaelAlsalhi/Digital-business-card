import React from "react";
import "./App.css";
import Headerfile from "./compo/header";
import Info from "./compo/info";
import Footer from "./compo/footer";

export default function App() {
  return (
   
    <div className="App">
      <div className="container-main">
      <Headerfile/>
      <Info/>
      <Footer/>
   </div>
   
    
    </div>

  );
}
