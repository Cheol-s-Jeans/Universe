import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Jupiter = ({ lineGeometry, lineMaterial ,name}) => {
  const textures = useTexture({
    map: "./images/galaxy/jupiter/8k_jupiter.jpg",
  });
  const refJupiterMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.0433329;
    refJupiterMesh.current.rotation.y += delta;
  });
  return (
    <>
      <group >
        <MeshComponents radius={0.5} transparent={true} opacity={0} rotation-z={(3.12 * Math.PI) / 180} position={[350, 0, 0]} name={name}>
          <MeshComponents radius={11.2} ref={refJupiterMesh} map={textures.map} transparent={false} />
        </MeshComponents>
      </group>
    </>
  );
};

export default Jupiter;
