import React from "react";
import logo from "./logo.svg";
import "./style.css";
import Image from "./source1.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Music</h1>
      <br />
      <img src={Image} />
      <br />
      <img src={"/public1.png"} />
    </div>
  );
}

export default App;
