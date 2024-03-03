import { forwardRef } from "react";
import * as THREE from "three";

const MeshComponents = forwardRef((props, ref) => {
  const {
    radius,
    color,
    roughness,
    metalness,
    opacity,
    transparent,
    map,
    alphaMap,
    aoMap,
    side,
    emissive,
    emissiveIntensity,
    toneMapped,
    bumpMap,
    emissiveMap,
    envMap,
    lightMap,
    metalnessMap,
    normalMap,
    roughnessMap,
    bumpScale,
    blending,
  } = props;

  // 기본값 설정
  const defaultValues = {
    radius: 1,
    color: 0xffffff,
    roughness: 0.5,
    metalness: 0.5,
    opacity: 1,
    transparent: false,
    map: null,
    alphaMap: null,
    aoMap: null,
    side: THREE.FrontSide,
    emissive: 0x000000,
    emissiveIntensity:null,
    toneMapped:true,
    bumpMap: null,
    emissiveMap: null,
    envMap: null,
    lightMap: null,
    metalnessMap: null,
    normalMap: null,
    roughnessMap: null,
    bumpScale: 1,
    blending: THREE.NormalBlending,
  };

  // 기본값과 속성 병합
  const mergedProps = { ...defaultValues, ...props };

  // Material에 전달할 속성 추출
  const {
    radius: mergedRadius,
    color: mergedColor,
    roughness: mergedRoughness,
    metalness: mergedMetalness,
    opacity: mergedOpacity,
    transparent: mergedTransparent,
    map: mergedMap,
    alphaMap: mergedAlphaMap,
    aoMap: mergedAoMap,
    side: mergedSide,
    emissive: mergedEmissive,
    emissiveIntensity: mergedEmissiveIntensity,
    toneMapped:mergedToneMapped,
    bumpMap: mergedBumpMap,
    emissiveMap: mergedEmissiveMap,
    envMap: mergedEnvMap,
    lightMap: mergedLightMap,
    metalnessMap: mergedMetalnessMap,
    normalMap: mergedNormalMap,
    roughnessMap: mergedRoughnessMap,
    bumpScale: mergedBumpScale,
    blending: mergedBlending,
  } = mergedProps;

  const geom = new THREE.SphereGeometry(mergedRadius, 64, 32);
  const mate = new THREE.MeshStandardMaterial({
    color: mergedColor,
    roughness: mergedRoughness,
    metalness: mergedMetalness,
    opacity: mergedOpacity,
    transparent: mergedTransparent,
    side: mergedSide,
    emissive: mergedEmissive,
    alphaMap: mergedAlphaMap,
    aoMap: mergedAoMap,
    map: mergedMap,
    bumpMap: mergedBumpMap,
    emissiveMap: mergedEmissiveMap,
    emissiveIntensity: mergedEmissiveIntensity,
    toneMapped:mergedToneMapped,
    envMap: mergedEnvMap,
    lightMap: mergedLightMap,
    metalnessMap: mergedMetalnessMap,
    normalMap: mergedNormalMap,
    roughnessMap: mergedRoughnessMap,
    bumpScale: mergedBumpScale,
    blending: mergedBlending,
  });

  return <mesh {...mergedProps} ref={ref} geometry={geom} material={mate}></mesh>;
});

export default MeshComponents;
