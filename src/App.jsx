import "./App.css";
import React, { useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
import * as THREE from "three";
import StarField from './galaxy/StarFiled';
import TopMenu from "./menu/TopMenu";
import BottomMenu from './menu/BottomMenu';
import RightMenu from "./menu/RightMenu";

const App = () => {
  const [cameraPosition, setCameraPosition] = useState({ x:0, y: 0, z:500})
  const [cameraTarget, setCameraTarget] = useState({x: 410, y: 0, z: 0})
  const CameraMove = (planetPosition) =>{
    setCameraPosition(planetPosition)
    setCameraTarget(planetPosition)
  }
  return (
    <>
      <Canvas
        camera={{
          near: 1,
          far: 10000,
          position: [cameraPosition.x, cameraPosition.y, cameraPosition.z]
        }}
      >
        <Sun CameraMove={CameraMove} cameraTarget={cameraTarget} cameraPosition={cameraPosition} />
        <StarField />
      </Canvas>
      {/* 메뉴 - React */}
      <TopMenu/>
      <RightMenu/>
      <BottomMenu/>
    </>
  );
};

export default App;