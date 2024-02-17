import { useTexture } from '@react-three/drei';
import MeshComponents from '../MeshComponents';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Venus = () => {
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
        <MeshComponents
            position={[230.5,0,0]}
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
        </>
    );
};

export default Venus;