/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: k.loren (https://sketchfab.com/k.loren)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/scifi-landscape-db1a1578f71249fb99524073de75c02a
title: Scifi landscape
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[1575.56, 126.94, -143.48]} rotation={[3.13, -0.04, -3.09]} scale={[100, 100, 100]} />
            <group position={[-4804.73, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane003_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane003_Material005_0.geometry} />
            </group>
            <group position={[-6369.12, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.001']} geometry={nodes.Plane004_Material001_0.geometry} />
              <mesh material={materials['Material.002']} geometry={nodes.Plane004_Material002_0.geometry} />
            </group>
            <group position={[-1622.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane001_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane001_Material005_0.geometry} />
            </group>
            <group position={[-3186.82, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.001']} geometry={nodes.Plane002_Material001_0.geometry} />
              <mesh material={materials['Material.002']} geometry={nodes.Plane002_Material002_0.geometry} />
            </group>
            <group position={[-5.46, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane000_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane000_Material005_0.geometry} />
            </group>
            <group position={[-12796.4, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane005_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane005_Material005_0.geometry} />
            </group>
            <group position={[-14360.79, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.001']} geometry={nodes.Plane006_Material001_0.geometry} />
              <mesh material={materials['Material.002']} geometry={nodes.Plane006_Material002_0.geometry} />
            </group>
            <group position={[-9614.1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane007_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane007_Material005_0.geometry} />
            </group>
            <group position={[-11178.49, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.001']} geometry={nodes.Plane008_Material001_0.geometry} />
              <mesh material={materials['Material.002']} geometry={nodes.Plane008_Material002_0.geometry} />
            </group>
            <group position={[-7997.13, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[800, 800, 800]}>
              <mesh material={materials['Material.004']} geometry={nodes.Plane009_Material004_0.geometry} />
              <mesh material={materials['Material.005']} geometry={nodes.Plane009_Material005_0.geometry} />
            </group>
            <group
              position={[-16149.65, 0, -46.14]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[2216.74, 2216.74, 2216.74]}>
              <mesh material={materials['Material.007']} geometry={nodes.Sphere_Material007_0.geometry} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
