"use client";
import React from 'react'
import { useGLTF } from '@react-three/drei'


const Elder = React.memo(
    function Model(props) {
        const { nodes, materials } = useGLTF('/models/Elder_ward.glb')
        console.log(nodes, materials)
        return (
            <group {...props} dispose={null}>
                <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} scale={0.24} />
            </group>
        )
    }
);

export default Elder
useGLTF.preload('/models/Elder_ward.glb')