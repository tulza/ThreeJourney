import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

const speen = {
    animate: {
        rotateY: Math.PI * 2,
        // rotateZ: Math.PI * 2 * 1,
    },
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
    },
};

export default function App() {
    let color = getComputedStyle(document.body).getPropertyValue("--bg");
    let ground = getComputedStyle(document.body).getPropertyValue("--ground");
    const hexGround = parseInt("0x" + ground.replace("#", ""), 16);

    console.log(color, ground, hexGround, 0xfff);
    return (
        <>
            <div className="size-[500px]">
                <Canvas>
                    <directionalLight position={[1, 2, 3]} />
                    <color attach="background" args={[color]} />
                    <motion.mesh scale={1} {...speen}>
                        <torusKnotGeometry />
                        <meshNormalMaterial />
                    </motion.mesh>
                    <motion.mesh {...speen}>
                        <sphereGeometry args={[2, 8, 8]} />
                        <meshBasicMaterial color="hotpink" wireframe />
                    </motion.mesh>
                    <mesh position-y={-5} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[20, 20]} />
                        <meshBasicMaterial color={hexGround} />
                    </mesh>
                </Canvas>
            </div>
        </>
    );
}
