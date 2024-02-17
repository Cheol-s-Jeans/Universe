import { useTexture } from "@react-three/drei";
import MeshComponents from "../galaxy/MeshComponents";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BottomMenuPlanet = ({item}) => {
    const {id, name, map, bumpMap,aoMap, desc} = item
    const mapUrl = useTexture(map);
    const bumpMapUrl = bumpMap?useTexture(bumpMap):null;
    const aoMapUrl = aoMap?useTexture(aoMap):null;
    const refPlanetMesh = useRef();
    useFrame((state, delta)=>{
        delta = 0.004;
        refPlanetMesh.current.rotation.y += delta;
    });
    return (
        <>
            <ambientLight intensity={3} />
            <MeshComponents ref={refPlanetMesh} radius={2.5} scale={1} map={mapUrl} bumpMap={bumpMapUrl}/>
            {/* {name==="earth"&&<MeshComponents />} */}
        </>
    );
};

export default BottomMenuPlanet;