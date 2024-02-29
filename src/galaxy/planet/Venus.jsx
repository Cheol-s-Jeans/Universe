import { useTexture } from '@react-three/drei';
import MeshComponents from '../MeshComponents';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Venus = ({ lineGeometry, lineMaterial ,name}) => {
    const textures = useTexture({
        map: "./images/galaxy/venus/venusmap.jpg",
        bumpMap: "./images/galaxy/venus/venusbump.jpg",
      });
      const refVenus = useRef();
      useFrame((state, delta) => {
        delta = 0.002247
        refVenus.current.rotation.y +=  delta;
      });
    return (
        <>
        <group>
            <line geometry={lineGeometry} material={lineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
            <MeshComponents
            position={[230,0,0]}
            name={name}
            transparent={true}
            opacity={0}
            rotation-z={(2.64 * Math.PI) / 180}
            >
            <MeshComponents
            radius={0.9}
            ref={refVenus}
            map={textures.map}
            bumpMap={textures.bumpMap}
            bumpScale={3}
            />
            </MeshComponents>
        </group>
        </>
    );
};

export default Venus;