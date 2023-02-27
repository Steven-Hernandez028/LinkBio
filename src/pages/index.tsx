import * as React from "react";
import * as THREE from "three";
import * as random from "maath/random";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stats } from "@react-three/drei";
import DesktopApp from "./components/DesktopApp";
import useWindow from "@/helper/useWindow";
import MobileApp from "./components/MobileApp";
extend(THREE);


export default function Webpage() {
  const [width, height] = useWindow();
  const [Md, setMd] = useState(false);
  const [Data, setData] = useState<boolean>(true);





  // function Box({ position, color }: any) {

  //   const refBox = useRef<THREE.Mesh>(null);

  //   useFrame((state, delta) => {
  //     refBox.current!.rotation.x -= delta / 5;
  //     refBox.current!.rotation.y -= delta / 4;
  //     // refBox.current!.position.x += 0.03;
  //     refBox.current!.position.z = THREE.MathUtils.lerp(
  //       refBox.current!.position.z -0.2,
  //       Math.sin(state.clock.elapsedTime / 5) / 20 + state.mouse.y / 2,
  //       0.02
  //     );

  //   });

  //   return (
  //     <mesh position={position} ref={refBox}>
  //           <sphereGeometry args={[1, 400, 120]} />
  //           <meshStandardMaterial  metalness={.5} roughness={0.06} color="red" transparent />

  //     </mesh>
  //   );
  // }

  const Stars = (props: any) => {
    const ref = useRef<THREE.Points>(null);

    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(4000), { radius: 5.5 })
    );
    useFrame((state, delta) => {
      ref.current!.rotation.x -= delta / 20;
      ref.current!.rotation.y -= delta / 30;
    });

    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color="#f30"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };
        {/* <Box color="#18a36e" position={[2, -5, -9]} />  */}

  return (
    <>
      <Head>
        <title>LinkBio | Steven Hernandez</title>
        <meta name="description" content="LinkBio Steven Hernandez | Web Developer | FullStack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main style={{overflow:"hidden"}}>     
      {/* <Canvas
          style={{
            width: "100vw",
            position: "fixed",
          }}
        >
        <Stats />
            <Stars />
          <directionalLight
            color="#ffffff"
            intensity={1}
            position={[-1, 2, 4]}
          />
          <hemisphereLight intensity={0.2} color="#fff" groundColor="blue" />


        </Canvas> */}

        {width >600 ?  <DesktopApp />:<MobileApp/>}
      </main>
    </>
  );
}
