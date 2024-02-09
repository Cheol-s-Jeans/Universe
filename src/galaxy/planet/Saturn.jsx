import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Saturn = () => {
    const textures = useTexture({
        map: "./images/galaxy/saturn/saturnmap.jpg",
        //토성 띠
        bumpMap: "./images/galaxy/saturn/saturnringcolor.jpg",
        aoMap: "./images/galaxy/saturn/saturnringpattern.gif",
    });
    const refSaturnMesh = useRef();
    const refSaturnRingColor = useRef();
    const refSaturnRingPattern = useRef();
    useFrame((state,delta)=>{
        delta=0.107562
        refSaturnMesh.current.rotation.y += delta
    })
    return (
        <>
            <group
                position={[13,0,0]}
            >
                <MeshComponents
                    radius={0.5}
                    transparent={true}
                    rotation-z={(26.73*Math.PI/180)}
                >
                    <MeshComponents
                        ref={refSaturnMesh}
                        radius={1}
                        map={textures.map}
                        transparent={false}
                    />
                    <group>
                    <mesh>
                            <torusGeometry
                                args={[2,0.3,2,64]}
                            />
                            <meshBasicMaterial
                                map={textures.aoMap}
                                textures={textures.aoMap.rotation=90*Math.PI/180}
                                transparent={true}
                                // opacity={0}
                            />
                        </mesh>
                        <mesh>
                            <torusGeometry
                                args={[2,0.3,2,64]}
                            />
                            <meshBasicMaterial
                                map={textures.bumpMap}
                                blending={THREE.AdditiveBlending}
                                textures={textures.bumpMap.rotation=90*Math.PI/180}
                            />
                        </mesh>
                        

                    </group>
                </MeshComponents>
                
            </group>   
        </>
    );
};

export default Saturn;