import * as React from "react";
import * as THREE from "three";
import * as random from "maath/random";
import Head from "next/head";
import { useState, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stats } from "@react-three/drei";
import LinkBio from "./components/LinkBio";
extend(THREE);

export default function Webpage() {
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
        const firstRef = useRef<THREE.Points>(null);
        const secondRef = useRef<THREE.Points>(null);
        const dots = React.useMemo(() => new Float32Array(2000), []);
        const [sphere] = useState(() => random.inSphere(dots, { radius: 5.5 }));

        useFrame((state, delta) => {
            firstRef.current!.rotation.x -= delta / 90;
            firstRef.current!.rotation.y -= delta / 85;

            secondRef.current!.rotation.z -= delta / 105;
            secondRef.current!.rotation.y += delta / 90;
        });

        return (
            <group rotation={[10, 5, Math.PI / 4]}>
                <Points
                    ref={firstRef}
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
                <Points
                    ref={secondRef}
                    positions={sphere}
                    stride={3}
                    frustumCulled={false}
                    {...props}
                >
                    <PointMaterial
                        transparent
                        color="#ff0"
                        size={0.03}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            </group>
        );
    };
    //         <Box color="#18a36e" position={[2, -5, -9]} />

    return (
        <>
            <Head>
                <title>LinkBio | Steven Hernandez</title>
                <meta
                    name="description"
                    content="LinkBio Steven Hernandez | Web Developer | FullStack"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main style={{ overflow: "hidden", position: "relative" }}>
                <Canvas
                    style={{
                        width: "100vw",

                        position: "fixed",
                    }}
                >
                    <Stars />
                    <directionalLight
                        color="#ffffff"
                        intensity={1}
                        position={[-1, 2, 4]}
                    />
                    <hemisphereLight
                        intensity={0.2}
                        color="#fff"
                        groundColor="blue"
                    />
                </Canvas>
                <LinkBio />
            </main>
        </>
    );
}
