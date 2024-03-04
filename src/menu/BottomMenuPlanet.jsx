import { useTexture } from "@react-three/drei";
import MeshComponents from "../galaxy/MeshComponents";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

const BottomMenuPlanet = ({item, isHoverId,CameraMove}) => {
    const {id, name, map, bumpMap,aoMap, desc, position} = item
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

    //click이벤트
    const handlePlanetClick = () => {
        const positionVector = new THREE.Vector3(position[0], position[1], position[2]);
        CameraMove(positionVector)
    }

        
    return (
        <>
            <ambientLight intensity={3} />
            <MeshComponents
                onClick={handlePlanetClick}
                ref={refPlanetMesh} 
                radius={2.5} 
                scale={1} 
                map={mapUrl} 
                bumpMap={bumpMapUrl}
                // aoMap={aoMapUrl}
            />
        </>
    );
};

export default BottomMenuPlanet;