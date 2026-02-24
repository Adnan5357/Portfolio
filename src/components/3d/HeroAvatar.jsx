import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';

const HoodieBoy = () => {
    const groupRef = useRef();
    const chestRef = useRef();
    const headRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Breathing animation
        const breathe = Math.sin(t * 2) * 0.01;
        chestRef.current.scale.set(1 + breathe, 1, 1 + breathe);

        // Idle floating
        groupRef.current.position.y = -1.2 + Math.sin(t) * 0.05;

        // Subtle head movement
        headRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
        headRef.current.rotation.z = Math.sin(t * 0.8) * 0.05;
    });

    const skinColor = "#ffcdb2";
    const hoodieColor = "#80B3A1"; // Matches light teal/green hoodie
    const stringColor = "#F2B872"; // Orange-yellow strings
    const hairColor = "#4A3525"; // Dark brown

    return (
        <group ref={groupRef} position={[0, -1.2, 0]}>
            {/* Body / Chest */}
            <group ref={chestRef} position={[0, 1.3, 0]}>
                {/* Torso */}
                <mesh>
                    <boxGeometry args={[1.2, 1.2, 0.7]} />
                    <meshStandardMaterial color={hoodieColor} roughness={0.9} />
                </mesh>

                {/* Hoodie Strings */}
                <mesh position={[-0.2, 0.4, 0.38]} rotation={[0, 0, 0.1]}>
                    <cylinderGeometry args={[0.03, 0.03, 0.5]} />
                    <meshStandardMaterial color={stringColor} roughness={0.5} />
                </mesh>
                <mesh position={[0.2, 0.4, 0.38]} rotation={[0, 0, -0.1]}>
                    <cylinderGeometry args={[0.03, 0.03, 0.5]} />
                    <meshStandardMaterial color={stringColor} roughness={0.5} />
                </mesh>

                {/* Left Arm (Crossed) */}
                <mesh position={[-0.1, -0.1, 0.42]} rotation={[0, 0, -Math.PI / 2.2]}>
                    <boxGeometry args={[0.35, 1.2, 0.35]} />
                    <meshStandardMaterial color={hoodieColor} roughness={0.9} />
                </mesh>
                {/* Right Arm (Crossed) */}
                <mesh position={[0.1, -0.2, 0.48]} rotation={[0, 0, Math.PI / 2.2]}>
                    <boxGeometry args={[0.35, 1.2, 0.35]} />
                    <meshStandardMaterial color={hoodieColor} roughness={0.9} />
                </mesh>

                {/* Hands tucked under arms */}
                <mesh position={[-0.5, -0.2, 0.45]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
                <mesh position={[0.5, -0.1, 0.40]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
            </group>

            {/* Neck */}
            <mesh position={[0, 2.0, 0]}>
                <cylinderGeometry args={[0.15, 0.2, 0.4]} />
                <meshStandardMaterial color={skinColor} roughness={0.4} />
            </mesh>

            {/* Head */}
            <group ref={headRef} position={[0, 2.5, 0]}>
                {/* Face base */}
                <mesh>
                    <boxGeometry args={[0.85, 0.9, 0.85]} />
                    <meshStandardMaterial color={skinColor} roughness={0.4} />
                </mesh>

                {/* Ears */}
                <mesh position={[-0.45, 0, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
                <mesh position={[0.45, 0, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>

                {/* Nose */}
                <mesh position={[0, 0, 0.45]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial color="#fca89d" /> {/* Slightly pinkish nose */}
                </mesh>

                {/* Eyes */}
                <mesh position={[-0.18, 0.15, 0.43]}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                <mesh position={[0.18, 0.15, 0.43]}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshStandardMaterial color="#111" />
                </mesh>

                {/* Eyebrows */}
                <mesh position={[-0.18, 0.28, 0.43]} rotation={[0, 0, -0.1]}>
                    <boxGeometry args={[0.15, 0.04, 0.04]} />
                    <meshStandardMaterial color={hairColor} />
                </mesh>
                <mesh position={[0.18, 0.28, 0.43]} rotation={[0, 0, 0.1]}>
                    <boxGeometry args={[0.15, 0.04, 0.04]} />
                    <meshStandardMaterial color={hairColor} />
                </mesh>

                {/* Smile / Mouth */}
                <mesh position={[0, -0.2, 0.41]} rotation={[Math.PI, 0, 0]}>
                    <torusGeometry args={[0.1, 0.02, 16, 16, Math.PI]} />
                    <meshStandardMaterial color="#d9776c" />
                </mesh>

                {/* Hair Base */}
                <mesh position={[0, 0.45, -0.05]}>
                    <boxGeometry args={[0.9, 0.25, 0.9]} />
                    <meshStandardMaterial color={hairColor} roughness={0.9} />
                </mesh>
                {/* Hair Swoop Front */}
                <mesh position={[0, 0.5, 0.2]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[0.95, 0.3, 0.6]} />
                    <meshStandardMaterial color={hairColor} roughness={0.9} />
                </mesh>
            </group>

            {/* Pants Placeholder */}
            <group position={[0, 0.4, 0]}>
                <mesh position={[-0.25, 0, 0]}>
                    <boxGeometry args={[0.42, 0.6, 0.42]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>
                <mesh position={[0.25, 0, 0]}>
                    <boxGeometry args={[0.42, 0.6, 0.42]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>
            </group>
        </group>
    );
};

export default function HeroAvatar() {
    return (
        <div style={{ width: '100%', height: '500px', cursor: 'grab' }} className="hero-avatar-container">
            <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
                <HoodieBoy />
                <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={10} blur={2} far={4} />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.1} />
            </Canvas>
        </div>
    );
}
