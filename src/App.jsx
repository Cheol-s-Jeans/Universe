import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Sun from "./galaxy/Sun";
import StarField from './galaxy/StarFiled';
import TopMenu from "./menu/TopMenu";
import BottomMenu from './menu/BottomMenu';
import RightMenu from "./menu/RightMenu";

const App = () => {
  const [cameraPosition, setCameraPosition] = useState({ x:330, y: 0, z:350})
  const [cameraTarget, setCameraTarget] = useState({x: 330, y: 0, z: 0})
  const CameraMove = (planetPosition) =>{
    setCameraPosition(planetPosition)
    setCameraTarget(planetPosition)
  }

  const [cameraPositionSet,setCameraPositionSet] = useState([0,0,0])

  return (
    <>
      <Canvas 
        camera={{
          fov:42,
          near: 1,
          far: 10000,
          position: [cameraPosition.x, cameraPosition.y, cameraPosition.z]
        }}
      >
        <Sun CameraMove={CameraMove} cameraTarget={cameraTarget} cameraPosition={cameraPosition} />
        <StarField />
      </Canvas>
      {/* 메뉴 - React.js */}
      <TopMenu setCameraPosition={setCameraPosition} setCameraTarget={setCameraTarget}/>
      <RightMenu/>
      <BottomMenu CameraMove={CameraMove} />
    </>
  );
};

export default App;