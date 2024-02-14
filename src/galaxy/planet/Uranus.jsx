import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Uranus = () => {
    const textures = useTexture({
        map:"./images/galaxy/uranus/uranusmap.jpg",
        //천왕성띠
        // map:"./images/galaxy/uranus/uranusringcolour.jpg",
        // map:"./images/galaxy/uranus/uranusringtrans.jpg",
    })
    const refUranusMesh = useRef();
    const refUranusRingColor = useRef();
    const refUranusRingTrans = useRef();
    useFrame((state,delta)=>{
        delta=0.3070749
        refUranusMesh.current.rotation.y += delta
    })
    return (
        <>
            <group
                position={[250,0,0]}
            >
                <MeshComponents
                    radius={0.5}
                    transparent={true}
                    opacity={0}
                    rotation-z={(82.23*Math.PI/180)}
                >
                    <MeshComponents
                        ref={refUranusMesh}
                        radius={4}
                        map={textures.map}
                        transparent={false}
                    />
                </MeshComponents>
                
            </group>   
        </>
    );
};

export default Uranus;