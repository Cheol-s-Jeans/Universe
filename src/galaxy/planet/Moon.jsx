import { useFrame } from "@react-three/fiber";
import MeshComponents from "../MeshComponents";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

const Moon = () => {
  const textures = useTexture({
    map: "./images/galaxy/moon/moonmap4k.jpg",
    bumpMap: "./images/galaxy/moon/moonbump4k.jpg",
  });
  const refMoonMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.0001339;
    refMoonMesh.current.rotation.y += delta;
  });
  return (
    <>
      <group position={[3, 0, 0]}>
        <MeshComponents radius={0.1} transparent={true} opacity={0} rotation-z={(6.6 * Math.PI) / 180}>
          <MeshComponents
            ref={refMoonMesh}
            radius={0.27}
            map={textures.map}
            bumpMap={textures.bumpMap}
            transparent={false}
            bumpScale={10}
          />
        </MeshComponents>
      </group>
    </>
  );
};

export default Moon;
