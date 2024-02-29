import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import Moon from "./Moon";
import * as THREE from "three";

  const Earth = ({ lineGeometry, lineMaterial ,torusGeometry, torusMaterial ,name}) => {
    const refEarth = useRef();
    const refEarthMesh = useRef();
    const refEarthLightMesh = useRef();
    const refCloudMesh = useRef();
    const refMoonRevolution = useRef();
    const refEarthLine = useRef();
    const textures = useTexture({
      map: "./images/galaxy/earth/earthmap1k.jpg",
      bumpMap: "./images/galaxy/earth/earthbump1k.jpg",
      aoMap: "./images/galaxy/earth/earthspec1k.jpg",
      normalMap: "./images/galaxy/earth/8k_earth_normal_map.jpg",
      ligthMap: "./images/galaxy/earth/8k_earth_nightmap.jpg",
      cloudMap: "./images/galaxy/earth/earthcloudmap.jpg",
      cloudBumpMap: "./images/galaxy/earth/earthcloudmaptrans.jpg",
    });

  useFrame((_, delta) => {
    const defaultDelta = 0.0036526;
    refEarthMesh.current.rotation.y += defaultDelta;
    refEarthLightMesh.current.rotation.y += defaultDelta;
    refCloudMesh.current.rotation.y += defaultDelta * 2;
    const moonDelta = 0.0001339;
    refMoonRevolution.current.rotation.y += moonDelta;
  });
  // Hover시, 이벤트
  const [isHovered, setHovered] = useState(false);
  const targetScale = isHovered ? new THREE.Vector3(20, 20, 20) : new THREE.Vector3(1, 1, 1);
  const targetColor = isHovered ? new THREE.Color('red') : new THREE.Color('#aaaaaa');

  useFrame(() => {
    if (refEarth.current && refEarthLine.current) {
      refEarthMesh.current.scale.lerp(targetScale, 0.05);
      refEarthLine.current.material.color.lerp(targetColor, 0.1); 
    }
  });
  const onPointerOver = () =>{
    setHovered(true)
  }
  const onPointerOut = () =>{
    setHovered(false)
  }
  return (
    <>
        <group onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
        <mesh geometry={torusGeometry} material={torusMaterial} rotation={[Math.PI / 2, 0, 0]} side={THREE.DoubleSide} renderOrder={998}/>
        <line ref={refEarthLine} geometry={lineGeometry} material={lineMaterial} rotation={[Math.PI / 2, 0, 0]} color={'red'}/>
        <MeshComponents radius={0.5} transparent={true} opacity={0} ref={refEarth} rotation-z={(23.44 * Math.PI) / 180}  position={[290, 0, 0]} name={name}>
        <MeshComponents radius={30} transparent={true} opacity={0} side={THREE.DoubleSide} renderOrder={999} />
          <MeshComponents
            radius={1}
            map={textures.map}
            bumpMap={textures.bumpMap}
            aoMap={textures.aoMap}
            normalMap={textures.normalMap}
            bumpScale={10}
            ref={refEarthMesh}
            transparent={false}
          />

          <MeshComponents
            map={textures.ligthMap}
            ref={refEarthLightMesh}
            blending={THREE.AdditiveBlending}
            transparent={false}
          />
          <MeshComponents
            map={textures.cloudMap}
            aoMap={textures.cloudBumpMap}
            blending={THREE.AdditiveBlending}
            transparent={true}
            opacity={0.25}
            ref={refCloudMesh}
            scale={1.005}
          />
        <MeshComponents radius={0.5} ref={refMoonRevolution} transparent={true} opacity={0}>
          <Moon />
        </MeshComponents>
        </MeshComponents>
      </group>
    </>
  );
};

export default Earth;
