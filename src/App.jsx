import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 7, 7] }}>
        <Sun />
      </Canvas>
    </>
  );
};

export default App;
