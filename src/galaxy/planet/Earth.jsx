import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
const Earth = () => {
  const textures = useTexture({
    map: "./images/galaxy/earthmap1k.jpg",
    bumpMap: "./images/galaxy/earthbump1k.jpg",
    aoMap:"./images/galaxy/earthspec1k.jpg",
    ligthMap:"./images/galaxy/earthlights1k.jpg",
    cloudMap:"./images/galaxy/earthcloudmap.jpg",
    cloudBumpMap:"./images/galaxy/earthcloudmaptrans.jpg"
  });
  const refEarthMesh = useRef();
  const refEarthLightMesh = useRef();
  const refCloudMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.00365
    refEarthMesh.current.rotation.y +=  delta;
    refEarthLightMesh.current.rotation.y +=  delta;
    refCloudMesh.current.rotation.y +=  delta*2;
  });
  return (
    <>
      <group
        position={[5, 0, 0]}
        >
        
    <MeshComponents
      radius={0.5}
      transparent={true}
      rotation-z={(23.5 * Math.PI) / 180}
      >
      <MeshComponents
        radius={1}
        map={textures.map}
        bumpMap={textures.bumpMap}
        aoMap={textures.aoMap}
        bumpScale={10}
        blending={THREE.AdditiveBlending}        
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