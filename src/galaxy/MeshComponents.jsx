import { forwardRef, useRef } from "react";
import * as THREE from "three";

// 메시 컴포넌트 재사용
const MeshComponents = forwardRef((props, ref) => {
  const { color, roughness, metalness, opacity, transparent, map, side, emissive } = props;
  // 기본값 설정
  const geom = new THREE.SphereGeometry();
  const mate = new THREE.MeshStandardMaterial({
    color: color,
    roughness: roughness,
    metalness: metalness,
    opacity: opacity,
    transparent: transparent,
    map: map,
    side: side,
    emissive: emissive,
  }); // 색상 props를 받아 기본값으로 사용하거나, 없을 경우 흰색 사용
  return <mesh {...props} ref={ref} geometry={geom} material={mate}></mesh>;
});

export default MeshComponents;
