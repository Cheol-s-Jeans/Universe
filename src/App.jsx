import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
import * as THREE from "three";
import StarField from './galaxy/StarFiled';
import TopMenu from "./menu/TopMenu";
import BottomMenu from './menu/BottomMenu';
import Star from './menu/rightMenu/Star';

const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          near: 1,
          far: 20000,
          position: [0, 0, 700],
        }}
      >
        <Sun />
        <StarField />
      </Canvas>

      {/* 메뉴 */}
      <TopMenu/>
      <Star/>
      <BottomMenu/>
    </>
  );
};

export default App;
