import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function InteractiveStars() {
    const groupRef = useRef();
    const starsRef = useRef();
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse to -1 to 1
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (!groupRef.current || !starsRef.current) return;

        // Slow continuous rotation for the stars
        starsRef.current.rotation.x -= delta / 30;
        starsRef.current.rotation.y -= delta / 40;

        // Interactive mouse movement on the wrapping group
        // Smoothly interpolate towards the mouse target
        const targetX = mouse.current.y * 0.15;
        const targetY = mouse.current.x * 0.15;

        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
            <Stars
                ref={starsRef}
                radius={100}
                depth={50}
                count={6000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    );
}

const Background3D = () => {
    return (
        <div
            className="background-3d"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'var(--bg-primary)'
            }}
        >
            <Canvas camera={{ position: [0, 0, 1] }}>
                <InteractiveStars />
            </Canvas>
            {/* Subtle overlay gradient to ensure text readability */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%)',
                    zIndex: 1
                }}
            />
        </div>
    );
};

export default Background3D;
