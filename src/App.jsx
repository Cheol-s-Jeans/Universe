import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
import * as THREE from "three";
import StarField from "./StarFiled";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          near: 1,
          far: 20000,
          position: [0, 0, 2470],
        }}
      >
        <Sun />
        <StarField />
      </Canvas>
    </>
  );
};

export default App;
