import { useTexture } from "@react-three/drei";
import MeshComponents from "../MeshComponents";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Mercury = () => {
  const textures = useTexture({
    map: "./images/galaxy/mercury/mercurymap.jpg",
    bumpMap: "./images/galaxy/mercury/mercurybump.jpg",
  });
  const refMercury = useRef();
  useFrame((state, delta) => {
    delta = 0.0008797;
    refMercury.current.rotation.y += delta;
  });
  return (
    <>
      <MeshComponents
        position={[170, 0, 0]}
        radius={0.1}
        rotation-z={(0.01 * Math.PI) / 180}
        transparent={true}
        opacity={0}
      >
        <MeshComponents radius={0.4} ref={refMercury} map={textures.map} bumpMap={textures.bumpMap} bumpScale={3} />
      </MeshComponents>
    </>
  );
};

export default Mercury;
