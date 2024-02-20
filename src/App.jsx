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
  // const [position, setPosition] = useState({ x: 25, y: 4, z: -8})
  // const [target, setTarget] = useState({x: 0, y: 0, z: 0})

  // const handleOnclick = () => {
  //   setPosition({x: 5, y: 2, z: 0})
  //   setTarget({x: 3, y: 2, z: 0 })
  // }
  return (
    <>
      <Canvas
        shadows
        camera={{
          near: 1,
          far: 20000,
          position: [0, 200, 500],
        }}
        
      >
      {/* <CameraControls position={position} target={target}/> */}
        <Sun />
        <StarField />
      </Canvas>

      {/* 메뉴 - React */}
      <TopMenu/>
      <Star/>
      <BottomMenu/>
    </>
  );
};

export default App;
