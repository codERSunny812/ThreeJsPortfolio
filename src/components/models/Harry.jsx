
"use client";
import React, { useRef } from "react";
import { useGLTF , OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/H.glb");
  console.log(nodes , materials)

  const modelRef = useRef();

  // hook to help to run the function on every function 
  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.4;
  });

  return (
    <>
      {/* Add OrbitControls */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[1, -1.1, 0.3]} // Centering the model
      scale={[1, 1, 1]}       // Adjust scale if needed
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Harry_clothes1.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        materials = { materials["Harry_clothes2.001"] }
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Harry_eyelash.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["Harry_eyes.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Harry_glasses.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials["Harry_hair.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Harry_hands.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials["Harry_head.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Harry_lacrimal.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials["Harry_mouth.001"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials["material_0.007"]}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
    </group>
    </>
  );
});

export default Wizard;
useGLTF.preload("/models/H.glb");
