import { OrbitControls, useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Mercury from "./planet/Mercury";
import Venus from "./planet/Venus";
import Earth from "./planet/Earth";
import Mars from "./planet/Mars";
import Jupiter from "./planet/Jupiter";
import Saturn from "./planet/Saturn";
import Uranus from "./planet/Uranus";
import Neptune from "./planet/Neptune";
import * as THREE from 'three'
import { Bloom, EffectComposer} from '@react-three/postprocessing';
const planets = [
  {id:1, name: 'Mercury', component: Mercury, radius: 170 },
  {id:2, name: 'Venus', component: Venus, radius: 230 },
  {id:3, name: 'Earth', component: Earth, radius: 290 },
  {id:4, name: 'Mars', component: Mars, radius: 350 },
  {id:5, name: 'Jupiter', component: Jupiter, radius: 410 },
  {id:6, name: 'Saturn', component: Saturn, radius: 470 },
  {id:7, name: 'Uranus', component: Uranus, radius: 530 },
  {id:8, name: 'Neptune', component: Neptune, radius: 590 },
];

const Sun = () => {
  const textures = useTexture({ map: "./images/galaxy/sun/8k_sun.jpg" });
  const refMesh = useRef();

  useFrame((state, delta) => {
    delta = 0.00001;
    refMesh.current.rotation.y += delta;
  });

  const createCurve = (xRadius, yRadius, tube =15, radialSegments = 16, tubularSegments = 100) => {
    const curve = new THREE.EllipseCurve(0, 0, xRadius, yRadius, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(1000);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent : true, opacity:0.3 });
    const torusGeometry = new THREE.TorusGeometry(xRadius, tube, radialSegments, tubularSegments);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, transparent : true, opacity:0});
    return { lineGeometry, lineMaterial, torusGeometry, torusMaterial };
}


const { gl,camera,scene } = useThree();
  const raycaster = new THREE.Raycaster();
  
  const onMouseMove = (e) =>{
    const mouse = {
      x: (e.clientX /gl.domElement.clientWidth) *2 -1,
      y: -(e.clientY /gl.domElement.clientHeight) *2 +1,
    }
    raycaster.setFromCamera(mouse,camera)
    const inersects = raycaster.intersectObjects(scene.children, true)
    // console.log(mouse.x, mouse.y)
    if(inersects.length > 0){
      console.log('마우스 인')
    }else {
      console.log('마우스 아웃')
    }
  }
  gl.domElement.addEventListener('click', onMouseMove)
  
  return (
    <>
      <axesHelper scale={200} />
      <ambientLight intensity={0.3} />
      <EffectComposer>
        <Bloom 
          intensity={1} 
          luminanceThreshold={0.9} 
          luminanceSmoothing={0.222} 
          mipmapBlur={true} />
      </EffectComposer>
      {/* 중간 주석 처리 Alt + Shift + A */}
      <MeshComponents 
        radius={109} 
        ref={refMesh} 
        position={[0, 0, 0]} 
        map={textures.map} 
        emissiveMap={textures.map} 
        emissive="#ffffff" 
        /* emissiveIntensity={3} */
      >
        <OrbitControls enabled={true}/>

        <pointLight intensity={500000} position={[0, 0, 0]} color="#FFFFFF" distance={0} />
        {planets.map((planet) => {
          const PlanetComponent = planet.component;
          const { lineGeometry, lineMaterial,torusGeometry, torusMaterial  } = createCurve(planet.radius, planet.radius);
          return <PlanetComponent key={planet.id} lineGeometry={lineGeometry} lineMaterial={lineMaterial} torusGeometry={torusGeometry} torusMaterial={torusMaterial} />
        })}

      </MeshComponents>
    </>
  );
};

export default Sun;