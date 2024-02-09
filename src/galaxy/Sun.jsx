import { OrbitControls, useHelper, useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Earth from "./planet/Earth";
import Neptune from "./planet/Neptune";
import Uranus from "./planet/Uranus";
import Saturn from "./planet/Saturn";
import Jupiter from './planet/Jupiter';

const Sun = () => {
  const textures = useTexture({
    map: "./images/galaxy/sunmap.jpg",
  });
  const refMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.00001
    refMesh.current.rotation.y += delta;
  });
  return (
    <>
      <axesHelper scale={10} />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <pointLight intensity={100} position={[0, 0, 0]} color="#ffffff" distance={0} />
      
      <MeshComponents
        radius={1}
        ref={refMesh}
        position={[0, 0, 0]}
        scale={1}
        map={textures.map}
        // rotation-z={(23.5 * Math.PI) / 180}
        // side={THREE.BackSide}
        // roughness="0.5"
        // metalness="1"
        // transparent={true}
        // opacity="0.5"
      >
        <Earth />
        <Jupiter/>
        <Saturn/>
        <Uranus/>
        <Neptune/>
      </MeshComponents>
    </>
  );
};

export default Sun;