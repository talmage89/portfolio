import * as React from "react";
import * as THREE from "three";
import { OrbitControls, Sphere, Grid } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import "./ReactThreeFiber.scss";

export const ReactThreeFiber = () => {
  return (
    <div className="ReactThreeFiber">
      <Canvas
        className="ReactThreeFiber__canvas"
        style={{ background: "white" }}
      >
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} intensity={10} color="#ffffff" />

        <FloatingSpheres count={200} boundary={4} />

        <Grid
          args={[10, 10]}
          position={[0, -5, 0]}
          cellSize={0.5}
          cellThickness={0.5}
          sectionSize={1}
          sectionThickness={1.5}
          fadeDistance={10}
          fadeStrength={1}
          infiniteGrid
        />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={1}
          />
        </EffectComposer>

        <OrbitControls maxDistance={10} minDistance={5} enablePan={false} />
      </Canvas>
    </div>
  );
};

const FloatingSpheres = ({ count = 30, boundary = 5 }) => {
  const [triggerExplosion, setTriggerExplosion] = React.useState(false);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setTriggerExplosion(true);
        setTimeout(() => setTriggerExplosion(false), 100);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const spheres = Array.from({ length: count }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * boundary * 2,
      (Math.random() - 0.5) * boundary * 2,
      (Math.random() - 0.5) * boundary * 2
    ),
    scale: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 0.01,
    rotationSpeed: Math.random() * 0.005 + 0.0025,
    velocity: new THREE.Vector3(0, 0, 0),
    explosionDirection: new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    ).normalize(),
  }));

  return spheres.map((props, index) => (
    <AnimatedSphere
      key={index}
      {...props}
      boundary={boundary}
      spheres={spheres}
      triggerExplosion={triggerExplosion}
    />
  ));
};

const AnimatedSphere = ({
  position,
  scale,
  rotationSpeed,
  boundary,
  spheres,
  explosionDirection,
  triggerExplosion,
}: {
  position: THREE.Vector3;
  scale: number;
  rotationSpeed: number;
  boundary: number;
  spheres: {
    position: THREE.Vector3;
    scale: number;
    speed: number;
    rotationSpeed: number;
    explosionDirection: THREE.Vector3;
    velocity: THREE.Vector3;
  }[];
  explosionDirection: THREE.Vector3;
  triggerExplosion: boolean;
}) => {
  const ref = React.useRef<THREE.Mesh>(null);
  const velocityRef = React.useRef(new THREE.Vector3(0, 0, 0));
  const { camera } = useThree();

  useFrame((state) => {
    if (ref.current) {
      if (triggerExplosion) {
        const explosionStrength = 0.1 + Math.random() * 0.1;
        velocityRef.current.add(
          explosionDirection.clone().multiplyScalar(explosionStrength)
        );
      }

      ref.current.position.add(velocityRef.current);
      velocityRef.current.multiplyScalar(0.95);

      const direction = ref.current.position
        .clone()
        .sub(camera.position)
        .normalize();

      const distance = ref.current.position.distanceTo(camera.position);
      const repulsionRadius = 7;
      const force = Math.max(0, (1 - distance / repulsionRadius) * 0.1);
      ref.current.position.add(direction.multiplyScalar(force));

      spheres.forEach((otherProps, index) => {
        if (ref.current !== null && otherProps.position !== position) {
          const otherSphere = ref.current.parent?.children[index];
          if (otherSphere) {
            const distanceBetween = ref.current.position.distanceTo(
              otherSphere.position
            );
            const threshold = (scale + otherProps.scale) / 1.5;

            if (distanceBetween < threshold) {
              const overlap = threshold - distanceBetween;
              const pushDirection = ref.current.position
                .clone()
                .sub(otherSphere.position)
                .normalize();
              ref.current.position.add(
                pushDirection.multiplyScalar(overlap * 0.5)
              );
              otherSphere.position.add(
                pushDirection.multiplyScalar(-overlap * 0.5)
              );
            }
          }
        }
      });

      ref.current.rotation.y += rotationSpeed;
      ref.current.rotation.x += rotationSpeed / 2;
      (["x", "y", "z"] as const).forEach((axis) => {
        const position = ref.current!.position[axis];
        if (Math.abs(position) > boundary) {
          ref.current!.position[axis] = Math.sign(position) * boundary;
          velocityRef.current[axis] = velocityRef.current[axis] * -0.5;
        }
      });

      ref.current.scale.setScalar(
        scale + Math.sin(state.clock.elapsedTime * 4.5) * 0.02
      );
    }
  });

  return (
    <Sphere
      ref={ref}
      args={[1, 64, 64]}
      position={position.toArray()}
      scale={scale}
    >
      <meshStandardMaterial
        opacity={0.8}
        roughness={0.05}
        color={`hsl(${Math.random() * 360}, 80%, 50%)`}
      />
    </Sphere>
  );
};
