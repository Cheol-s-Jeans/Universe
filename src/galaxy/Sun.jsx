import { useTexture } from "@react-three/drei";
import CameraControls from '../CameraControls'
import MeshComponents from "./MeshComponents";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'
import { Bloom, EffectComposer} from '@react-three/postprocessing';
import PlanetComponents from "./PlanetComponents";
import planetList from "../assets/api/PlanetList";

const Sun = ({CameraMove,cameraPosition,cameraTarget}) => {
  const textures = useTexture({ map: "./images/galaxy/sun/8k_sun.jpg" });
  const refMesh = useRef();
  
  const { gl,camera,scene } = useThree();
  const raycaster = new THREE.Raycaster();

  const onDocumentMouseDown  = (e) => {
    e.preventDefault();
    const mouse = {
      x: (e.clientX / gl.domElement.clientWidth) * 2 - 1,
      y: -(e.clientY / gl.domElement.clientHeight) * 2 + 1,
    }
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)

    if (intersects.length > 0) {
      let object = intersects[0].object;
      while (object) {
        if (planetList.map(planet => planet.name).includes(object.name)) {
          const namedObject = object.getObjectByName(object.name);
          if (namedObject) {
            CameraMove(namedObject.position)
          }
          break;
        }
        object = object.parent;
      }
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown, false);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <EffectComposer>
        <Bloom 
          intensity={1} 
          luminanceThreshold={0.9} 
          luminanceSmoothing={0.222} 
          mipmapBlur={true} />
      </EffectComposer>

      <MeshComponents radius={109} ref={refMesh} position={[0, 0, 0]} map={textures.map} emissiveMap={textures.map} emissive="#ffffff" emissiveIntensity={3}>
        <CameraControls position={cameraPosition} target={cameraTarget}/>
        <pointLight intensity={400000} position={[0, 0, 0]} color="#FFFFFF" distance={0} />
        {planetList.map(item=><PlanetComponents key={item.id} item={item} />)}
      </MeshComponents>
    </>
  );
};

export default Sun;