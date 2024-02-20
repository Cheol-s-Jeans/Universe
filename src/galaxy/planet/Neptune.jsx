import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Neptune = ({ lineGeometry, lineMaterial }) => {
  const textures = useTexture({
    map: "./images/galaxy/neptune/neptunemap.jpg",
  });
  const refneptuneMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.6022335;
    refneptuneMesh.current.rotation.y += delta;
  });
  return (
    <>
      <group >
      <line geometry={lineGeometry} material={lineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <MeshComponents radius={0.5} transparent={true} opacity={0} rotation-z={(28.33 * Math.PI) / 180} position={[590, 0, 0]}>
          <MeshComponents radius={3.9} map={textures.map} ref={refneptuneMesh} transparent={false} />
        </MeshComponents>
      </group>
    </>
  );
};

export default Neptune;
