import { useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Moon from './Moon';
import * as THREE from 'three'

const PlanetComponents = ({item}) => {
    const refPlanetMesh = useRef()
    const refEarthLightMesh = useRef()
    const refEarthCloudMesh = useRef()
    const refMoonMesh = useRef()
    const refSaturnRingMesh = useRef()
    const refUranusRingMesh = useRef()

    const {id, name,radius,rotatZ,spin, distanse,position, map, bumpMap,aoMap, normalMap, ligthMap, cloudMap, cloudBumpMap,ringMap,alphaMap } = item
    const mapUrl = useTexture(map);
    const bumpMapUrl = bumpMap?useTexture(bumpMap):null;
    const aoMapUrl = aoMap?useTexture(aoMap):null;
    const normalMapUrl = normalMap?useTexture(normalMap):null;
    const ligthMapUrl = ligthMap?useTexture(ligthMap):null;
    const cloudMapUrl = cloudMap?useTexture(cloudMap):null;
    const cloudBumpMapUrl = cloudBumpMap?useTexture(cloudBumpMap):null;
    const ringMapUrl = ringMap?useTexture(ringMap):null;
    const alphaMapUrl = alphaMap?useTexture(alphaMap):null;

    //행성hover -> 행성scale UP
    const [isPlanetHover, setIsPlanetHover] = useState(false);

    useFrame((state, delta) => {
        delta = spin;
        refPlanetMesh.current.rotation.y += delta;
        if (name === 'Earth') {
            refMoonMesh.current.rotation.y +=0.003;
            refEarthLightMesh.current.rotation.y += delta;
            refEarthCloudMesh.current.rotation.y += delta*2;
            if(isPlanetHover){
                refEarthLightMesh.current.scale.lerp(new THREE.Vector3(20, 20, 20), 0.05);
                refEarthCloudMesh.current.scale.lerp(new THREE.Vector3(20, 20, 20), 0.05);
                refMoonMesh.current.scale.lerp(new THREE.Vector3(20, 20, 20), 0.05);
            }else{
                refEarthLightMesh.current.scale.lerp(new THREE.Vector3(radius,radius,radius), 0.05);
                refEarthCloudMesh.current.scale.lerp(new THREE.Vector3(radius,radius,radius), 0.05);
                refMoonMesh.current.scale.lerp(new THREE.Vector3(radius,radius,radius), 0.05);
            }
        }
        if (isPlanetHover) {
            refPlanetMesh.current.scale.lerp(new THREE.Vector3(20, 20, 20), 0.05);
            if(name==='Saturn'){
                refSaturnRingMesh.current.scale.lerp(new THREE.Vector3(2,2,2),0.05)
            }
            if(name==='Uranus'){
                refUranusRingMesh.current.scale.lerp(new THREE.Vector3(3.5,3.5,3.5),0.05)
            }
        } else {
            refPlanetMesh.current.scale.lerp(new THREE.Vector3(radius,radius,radius), 0.05);
            if(name==='Saturn'){
                refSaturnRingMesh.current.scale.lerp(new THREE.Vector3(1,1,1), 0.05);
            }
            if(name==='Uranus'){
                refUranusRingMesh.current.scale.lerp(new THREE.Vector3(1,1,1), 0.05);
            }
        }
      });

    return (
        <>
            <group>
                <MeshComponents  onPointerOver={()=>setIsPlanetHover(true)} onPointerOut={()=>setIsPlanetHover(false)} radius = {10} transparent={true} opacity ={0} rotation-z={(rotatZ*Math.PI/180)} position={position} name={name}>
                        <MeshComponents ref={refPlanetMesh} transparent={false} map={mapUrl} bumpMap={bumpMapUrl} aoMap={aoMapUrl} normalMap={normalMapUrl} 
                            bumpScale={name==='Mercury'||'Venus'?3: name==='Earth'?10 : name==='Mars'?5: 0}
                            />
                        {name==='Earth'&&
                            <>
                                <MeshComponents ref={refEarthLightMesh} map={ligthMapUrl} blending={THREE.AdditiveBlending} transparent={false}/>
                                <MeshComponents ref={refEarthCloudMesh} map={cloudMapUrl} aoMap={cloudBumpMapUrl} blending={THREE.AdditiveBlending} transparent={true} opacity={0.25} scale={1.005}/>
                                <MeshComponents ref={refMoonMesh} radius={0.1} transparent={true} opacity={0}>
                                    <Moon setIsPlanetHover={setIsPlanetHover}/>
                                </MeshComponents>
                            </>
                        }
                        {name==='Saturn'&&
                            <>
                                <group ref={refSaturnRingMesh}>
                                    <mesh rotation-x={Math.PI/2} >
                                        <torusGeometry args={[17.5,3,2,200]} />
                                        <meshStandardMaterial
                                            map={ringMapUrl}
                                            textures={ringMapUrl.rotation = Math.PI /2}
                                            transparent={true}
                                            opacity={0.25}
                                        />
                                    </mesh>
                                    <mesh rotation-x={Math.PI/2} >
                                        <torusGeometry args={[17.5,3,2,200]}/>
                                        <meshStandardMaterial
                                            alphaMap={alphaMapUrl}
                                            blending={THREE.AdditiveBlending}
                                            textures={alphaMapUrl.rotation = Math.PI /2}
                                            transparent={true} opacity={0.25}
                                    />
                                    </mesh>
                                </group>
                            </>
                        }
                        {name==='Uranus'&&
                            <>
                                <group ref={refUranusRingMesh}>
                                    <mesh rotation-x={Math.PI/2} >
                                        <torusGeometry args={[10,2,2,200]} />
                                        <meshStandardMaterial
                                            map={ringMapUrl}
                                            textures={ringMapUrl.rotation = Math.PI /2}
                                            transparent={true}
                                            opacity={0.25}
                                        />
                                    </mesh>
                                    <mesh rotation-x={Math.PI/2} >
                                        <torusGeometry args={[10,2,2,200]}/>
                                        <meshStandardMaterial
                                            map={alphaMapUrl}
                                            blending={THREE.AdditiveBlending}
                                            textures={alphaMapUrl.rotation = Math.PI /2}
                                            transparent={true} opacity={0.25}
                                    />
                                    </mesh>
                                </group>
                            </>
                        }
                    {/* </group> */}
                </MeshComponents>
            </group>
        </>
    );
};

export default PlanetComponents;