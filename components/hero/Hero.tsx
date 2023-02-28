import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useRef, useState } from "react";

export const Hero = ({ ...props }) => {
  return (
    <div className="relative hover:border-0 my-4 w-full h-56">
      <Canvas
        className="border border-gray-200 rounded-xl"
        camera={{ position: [0, 0, 1] }}
        {...props}
      >
        <Stars />
      </Canvas>
      <div className="absolute inset-y-10 inset-x-10 w-full h-full">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
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

// import { OrbitControls } from "@react-three/drei";

// const Box = (props) => {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// };

// export const Hero = () => {
//   return (
//     <div className="w-full h-48">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <Box position={[-1.2, 0, 0]} />
//         <Box position={[1.2, 0, 0]} />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };
