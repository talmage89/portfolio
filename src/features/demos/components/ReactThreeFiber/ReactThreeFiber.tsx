import * as React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./ReactThreeFiber.scss";

export const ReactThreeFiber = () => {
  return (
    <div className="ReactThreeFiber">
      <Canvas className="ReactThreeFiber__canvas">
        <mesh>
          <boxGeometry args={[1, 2, 1]} />
          <meshNormalMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
};
