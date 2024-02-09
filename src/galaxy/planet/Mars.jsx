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
        ringMap:"./images/galaxy/mars/saturnringcolor.jpg",
        ringptMap:"./images/galaxy/mars/saturnringpattern.gif",
        
      });
      const refMars = useRef();
      useFrame((state, delta) => {
        delta = 0.0068696
        refMars.current.rotation.y +=  delta;
      });
      return (
        <>
            <MeshComponents
                      position={[9,0,0]}
            radius={0.5}
            rotation-z={(25.19 * Math.PI) / 180}
            >
          <MeshComponents
            map={textures.map}
            bumpMap={textures.bumpMap}
            normalMap={textures.normalMap}
            bumpScale={5}
            ref={refMars}
          />
          <group>
            <mesh>
          <torusGeometry
          args={[2,0.3,2,64]}

          />
          <meshBasicMaterial
          map={textures.ringMap}
          textures={textures.ringptMap.rotation=90*Math.PI/180}

          />
          
          </mesh>

          <mesh>
          <torusGeometry
          args={[2,0.3,2,64]}
          />
          <meshBasicMaterial
          map={textures.ringptMap}
          />
          </mesh>
          </group>
</MeshComponents>
        </>
      );
};

export default Mars;