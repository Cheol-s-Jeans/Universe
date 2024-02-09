import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
const App = () => {
  return (
    <>
      <Canvas camera={{ position: [20, 0, 10] }}>
        <Sun />
      </Canvas>
    </>
  );
};

export default App;
