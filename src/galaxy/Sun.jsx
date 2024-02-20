import { Line, OrbitControls, useHelper, useTexture } from "@react-three/drei";
import MeshComponents from "./MeshComponents";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Mercury from "./planet/Mercury";
import Venus from "./planet/Venus";
import Earth from "./planet/Earth";
import Mars from "./planet/Mars";
import Jupiter from "./planet/Jupiter";
import Saturn from "./planet/Saturn";
import Uranus from "./planet/Uranus";
import Neptune from "./planet/Neptune";
import * as THREE from 'three'
const Sun = () => {


  const textures = useTexture({
    map: "./images/galaxy/sun/8k_sun.jpg",
  });
  const refMesh = useRef();
  useFrame((state, delta) => {
    delta = 0.00001;
    refMesh.current.rotation.y += delta;
  });
  

  const createCurve = (xRadius,yRadius) => {
    const curve = new THREE.EllipseCurve(
      0,  0,            // ax, aY
      xRadius, yRadius,           // xRadius, yRadius
      0,  2 * Math.PI,  // aStartAngle, aEndAngle
      false,            // aClockwise
      0                 // aRotation
    );
    return curve;
  }
  const mercuryCurve = createCurve(170,170);
  const mercuryPoints = mercuryCurve.getPoints(1000);
  const mercuryLineGeometry = new THREE.BufferGeometry().setFromPoints( mercuryPoints );
  const mercuryLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa ,transparent : true, opacity:0.3} );
  const venusCurve = createCurve(230,230);
  const venusPoints = venusCurve.getPoints(1000);
  const venusLineGeometry = new THREE.BufferGeometry().setFromPoints( venusPoints );
  const venusLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  const earthCurve = createCurve(290,290);
  const earthPoints = earthCurve.getPoints(1000);
  const earthLineGeometry = new THREE.BufferGeometry().setFromPoints( earthPoints );
  const earthLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa ,transparent : true, opacity:0.3} );
  const marsCurve = createCurve(350,350);
  const marsPoints = marsCurve.getPoints(1000);
  const marsLineGeometry = new THREE.BufferGeometry().setFromPoints( marsPoints );
  const marsLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  const jupiterCurve = createCurve(410,410);
  const jupiterPoints = jupiterCurve.getPoints(1000);
  const jupiterLineGeometry = new THREE.BufferGeometry().setFromPoints( jupiterPoints );
  const jupiterLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  const saturnCurve = createCurve(470,470);
  const saturnPoints = saturnCurve.getPoints(1000);
  const saturnLineGeometry = new THREE.BufferGeometry().setFromPoints( saturnPoints );
  const saturnLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  const uranusCurve = createCurve(530,530);
  const uranusPoints = uranusCurve.getPoints(1000);
  const uranusLineGeometry = new THREE.BufferGeometry().setFromPoints( uranusPoints );
  const uranusLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  const neptuneCurve = createCurve(590,590);
  const neptunePoints = neptuneCurve.getPoints(1000);
  const neptuneLineGeometry = new THREE.BufferGeometry().setFromPoints( neptunePoints );
  const neptuneLineMaterial = new THREE.LineBasicMaterial( { color: 0xaaaaaa,transparent : true, opacity:0.3 } );
  return (
    <>
      <axesHelper scale={200} />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <pointLight intensity={50000} position={[0, 0, 0]} color="#ffffff" distance={0} />

      <MeshComponents radius={109} ref={refMesh} position={[0, 0, 0]} scale={1} map={textures.map} rotation={[0,0,0.1]}>
        <line geometry={mercuryLineGeometry} material={mercuryLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={venusLineGeometry} material={venusLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={earthLineGeometry} material={earthLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={marsLineGeometry} material={marsLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={jupiterLineGeometry} material={jupiterLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={saturnLineGeometry} material={saturnLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={uranusLineGeometry} material={uranusLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <line geometry={neptuneLineGeometry} material={neptuneLineMaterial} rotation={[Math.PI / 2, 0, 0]}/>
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </MeshComponents>
    </>
  );
};

export default Sun;
