import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useRef, useState } from "react";

export const Hero = ({ ...props }) => {
  return (
    <div className="relative my-4 h-56 w-full hover:border-0">
      <Canvas
        className="rounded-xl border border-gray-200"
        camera={{ position: [0, 0, 1] }}
        {...props}
      >
        <Stars />
      </Canvas>
      <div className="absolute inset-y-10 inset-x-10 h-full w-full">
        <div className="text-transparent bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-3xl font-bold">
          Get started
        </div>
      </div>
    </div>
  );
};

const Stars = (props) => {
  const ref = useRef() as any; //possible null value
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
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
          color="#ffa0e0"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
