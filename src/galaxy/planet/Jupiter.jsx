import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Jupiter = () => {
    const textures = useTexture({
        map:"./images/galaxy/jupiter/jupiter2_4k.jpg",
    })
    const refJupiterMesh = useRef();
    useFrame((state,delta)=>{
        delta=0.0433329
        refJupiterMesh.current.rotation.y += delta
    })
    return (
        <>
        <group
            position={[11,0,0]}
        >
            <MeshComponents
                radius={0.5}
                transparent={true}
                rotation-z={(3.12*Math.PI/180)}
            >
                <MeshComponents
                    ref={refJupiterMesh}
                    radius={1}
                    map={textures.map}
                    transparent={false}
                />
            </MeshComponents>
            
        </group>   
    </>
    );
};

export default Jupiter;