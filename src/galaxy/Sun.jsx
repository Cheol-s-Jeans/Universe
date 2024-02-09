import { OrbitControls, useHelper, useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Mercury from './planet/Mercury';
import Venus from './planet/Venus';
import Earth from "./planet/Earth";
import Mars from './planet/Mars';
import Jupiter from './planet/Jupiter';
import Saturn from "./planet/Saturn";
import Uranus from "./planet/Uranus";
import Neptune from "./planet/Neptune";

const Sun = () => {
  const textures = useTexture({
    map: "./images/galaxy/sun/sunmap.jpg",
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
      >
        <Mercury />
        <Venus/>
        <Earth />
        <Mars/>
        <Jupiter/>
        <Saturn/>
        <Uranus/>
        <Neptune/>
      </MeshComponents>
    </>
  );
};

export default Sun;