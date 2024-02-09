import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
const Earth = () => {
  const textures = useTexture({
    map: "./images/galaxy/earth/earthmap1k.jpg",
    bumpMap: "./images/galaxy/earth/earthbump1k.jpg",
    aoMap:"./images/galaxy/earth/earthspec1k.jpg",
    ligthMap:"./images/galaxy/earth/earthlights1k.jpg",
    cloudMap:"./images/galaxy/earth/earthcloudmap.jpg",
    cloudBumpMap:"./images/galaxy/earth/earthcloudmaptrans.jpg"
  });
  const refEarthMesh = useRef();
  const refEarthLightMesh = useRef();
  const refCloudMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.0036526
    refEarthMesh.current.rotation.y +=  delta;
    refEarthLightMesh.current.rotation.y +=  delta;
    refCloudMesh.current.rotation.y +=  delta*2;
  });
  return (
    <>
      <group
        position={[7, 0, 0]}
        >
        
    <MeshComponents
      radius={0.5}
      transparent={true}
      ref={refEarth}
      rotation-z={(23.44 * Math.PI) / 180}
      >
      <MeshComponents
        radius={1}
        map={textures.map}
        bumpMap={textures.bumpMap}
        aoMap={textures.aoMap}
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
    </MeshComponents>

      </group>
    </>
  );
};

export default Earth;