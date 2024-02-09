import { forwardRef, useRef } from "react";
import * as THREE from "three";

// 메시 컴포넌트 재사용
const MeshComponents = forwardRef((props, ref) => {
  const { radius ,color, roughness, metalness, opacity, transparent, map,alphaMap,aoMap, side, emissive, bumpMap, emissiveMap,envMap,lightMap,metalnessMap,normalMap ,roughnessMap ,bumpScale,blending} = props;
  const geom = new THREE.SphereGeometry(radius, 64, 32);
  const mate = new THREE.MeshStandardMaterial({
    color: color,
    roughness: roughness,
    metalness: metalness,
    opacity: opacity,
    transparent: transparent,
    side: side,
    emissive: emissive,

    alphaMap:alphaMap,
    aoMap:aoMap,
    map: map,
    bumpMap: bumpMap,
    emissiveMap:emissiveMap,
    envMap:envMap,
    lightMap:lightMap,
    metalnessMap:metalnessMap,
    normalMap: normalMap,
    roughnessMap:roughnessMap,
    
    blending:blending,
    bumpScale:bumpScale,
  });
  return <mesh {...props} ref={ref} geometry={geom} material={mate}></mesh>;
});

export default MeshComponents;