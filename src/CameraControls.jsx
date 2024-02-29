import { OrbitControls } from "@react-three/drei";
  import { useThree } from "@react-three/fiber";
  import { useEffect, useRef } from "react";
  import gsap from 'gsap'

  
  const CameraControls = ({position, target}) => {
    const { camera } = useThree();
    const ref = useRef(null);

    function cameraAnimate() {
      console.log(position)
     if (ref.current) {
      if(position.x === 290){
        gsap.timeline().to(
          camera.position, 
          {
            duration: 2,
            repeat: 0,
            x: position.x + 4,
            y: position.y + 2,
            z: position.z + 2,
            ease: "power3.inOut",
        });
        gsap.timeline().to(
          ref.current.target,
          {
            duration: 2,
            repeat: 0,
            x: target.x,
            y: target.y,
            z: target.z,
            ease: "power3.inOut",
          }
        );
      }else {

        gsap.timeline().to(
          camera.position, 
          {
            duration: 2,
            repeat: 0,
            x: position.x + 40,
            y: position.y + 20,
            z: position.z + 50,
            ease: "power3.inOut",
        });
 
        gsap.timeline().to(
          ref.current.target,
          {
            duration: 2,
            repeat: 0,
            x: target.x,
            y: target.y,
            z: target.z,
            ease: "power3.inOut",
          }
        );
      }
     }
   }

   useEffect(() => {
    
     cameraAnimate();
   }, [target, position]);

    return (
      <OrbitControls ref={ref} />
    );
  };

  export default CameraControls ;