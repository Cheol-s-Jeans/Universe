import { useTexture } from "@react-three/drei";
import MeshComponents from "../galaxy/MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

const BottomMenuPlanet = ({item, isHoverId}) => {
    const {id, name, map, bumpMap,aoMap, desc} = item
    const mapUrl = useTexture(map);
    const bumpMapUrl = bumpMap?useTexture(bumpMap):null;
    const aoMapUrl = aoMap?useTexture(aoMap):null;
    const refPlanetMesh = useRef();

    //hover이벤트
    useFrame((state, delta)=>{
        if(isHoverId !== id){
            delta = 0.004;
            refPlanetMesh.current.rotation.y += delta;
            refPlanetMesh.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }else{
            refPlanetMesh.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
        }
    });
    
    return (
        <>
            <ambientLight intensity={3} />
            <MeshComponents
                ref={refPlanetMesh} 
                radius={2.5} 
                scale={1} 
                map={mapUrl} 
                bumpMap={bumpMapUrl}
            />
        </>
    );
};

export default BottomMenuPlanet;