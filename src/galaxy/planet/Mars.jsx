import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, RepeatWrapping } from 'three';
import * as THREE from 'three'
const Mars = () => {
    const textures = useTexture({
        map: "./images/galaxy/mars/mars_1k_color.jpg",
        bumpMap: "./images/galaxy/mars/mars_1k_topo.jpg",
        normalMap:"./images/galaxy/mars/mars_1k_normal.jpg",
      });
      const refMars = useRef();
      useFrame((state, delta) => {
        delta = 0.0068696
        refMars.current.rotation.y +=  delta;
      });
      return (
        <>
            <MeshComponents
                      position={[350,0,0]}
            radius={0.3}
            rotation-z={(25.19 * Math.PI) / 180}
            transparent={true}
      opacity={0}
            >
            <MeshComponents
            radius={0.5}
              map={textures.map}
              bumpMap={textures.bumpMap}
              normalMap={textures.normalMap}
              bumpScale={5}
              ref={refMars}
            />
            </MeshComponents>
        </>
      );
};

export default Mars;