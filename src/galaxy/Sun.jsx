import { OrbitControls, useHelper, useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sun = () => {
  const textures = useTexture({
    map: "./images/galaxy/sunmap.jpg",
  });
  const refMesh = useRef();
  //   useHelper(light, THREE.PointLightHelper, 0.5);
  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });
  return (
    <>
      <axesHelper scale={10} />
      <ambientLight intensity={0.1} />
      <OrbitControls />
      <pointLight intensity={10} position={[0, 4, 0]} color="#ffffff" distance={0} />

      <MeshComponents
        ref={refMesh}
        position={[0, 4, 0]}
        scale={[1, 1, 1]}
        map={textures.map}
        // side={THREE.BackSide}
        // roughness="0.5"
        // metalness="1"
        // transparent={true}
        // opacity="0.5"
      >
        <MeshComponents position={[2, 0, 0]} />
        <MeshComponents position={[-2, 0, 0]} />
        <MeshComponents position={[0, -2, 0]} />
        <mesh position={[0, 2, 0]}>
          <sphereGeometry />
        </mesh>
      </MeshComponents>
    </>
  );
};

export default Sun;
