import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Saturn = ({ lineGeometry, lineMaterial, name}) => {
  const textures = useTexture({
    map: "./images/galaxy/saturn/8k_saturn.jpg",
    //토성 띠
    ringMap: "./images/galaxy/saturn/saturnringcolor.jpg",
    alphaMap: "./images/galaxy/saturn/saturnringpattern.gif",
  });
  const refSaturnMesh = useRef();
  const refSaturnRingMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.107562;
    refSaturnMesh.current.rotation.y += delta;
    refSaturnRingMesh.current.rotation.y += delta;
  });
  return (
    <>
      <group >
      {/* <line geometry={lineGeometry} material={lineMaterial} rotation={[Math.PI / 2, 0, 0]} /> */}
        <MeshComponents radius={0.5} transparent={true} opacity={0} rotation-z={(26.73 * Math.PI) / 180}  position={[400, 0, 0]} name={name}>
          <MeshComponents ref={refSaturnMesh} radius={9.4} map={textures.map} transparent={false}/>
            <group ref={refSaturnRingMesh}>
            <mesh rotation-x={Math.PI/2}>
              <torusGeometry args={[17.5,3,2,100]} />
              <meshStandardMaterial
                map={textures.ringMap}
                textures={textures.ringMap.rotation = Math.PI /2}
              />
            </mesh>
            <mesh rotation-x={Math.PI/2} >
              <torusGeometry args={[17.5,3,2,100]}/>
              <meshStandardMaterial
                map={textures.alphaMap}
                textures={textures.alphaMap.rotation = Math.PI /2}
              />
            </mesh>
            </group>
        </MeshComponents>
      </group>
    </>
  );
};

export default Saturn;
