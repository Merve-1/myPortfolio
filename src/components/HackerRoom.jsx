import React from 'react';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function HackerRoom(props) {
  // Load the GLB model using useLoader
  const gltf = useLoader(GLTFLoader, '/models/hacker-room.glb');

  // Load textures for the monitor and screen
  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/textures/desk/screen.png');
  return (
    <group {...props} dispose={null}>
      {/* Computer Mesh */}
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes?.computer_computer_mat_0?.geometry} 
        material={materials?.computer_mat}
      >
        <meshStandardMaterial map={monitorTexture} />
      </mesh>

      {/* Screen Mesh */}
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes?.screen_screens_0?.geometry} 
        material={materials?.screens}
      >
        <meshStandardMaterial map={screenTexture} />
      </mesh>

      {/* Other Objects */}
      {nodes && materials && (
        <>
          <mesh geometry={nodes?.screen_glass_glass_0?.geometry} material={materials?.glass} />
          <mesh geometry={nodes?.table_table_mat_0_1?.geometry} material={materials?.table_mat} />
          <mesh geometry={nodes?.table_table_mat_0_2?.geometry} material={materials?.computer_mat} />
          <mesh geometry={nodes?.table_table_mat_0_3?.geometry} material={materials?.server_mat} />
          <mesh geometry={nodes?.table_table_mat_0_4?.geometry} material={materials?.vhsPlayer_mat} />
          <mesh geometry={nodes?.table_table_mat_0_5?.geometry} material={materials?.stand_mat} />
          <mesh geometry={nodes?.table_table_mat_0_6?.geometry} material={materials?.mat_mat} />
          <mesh geometry={nodes?.table_table_mat_0_7?.geometry} material={materials?.arm_mat} />
          <mesh geometry={nodes?.table_table_mat_0_8?.geometry} material={materials?.tv_mat} />
          <mesh geometry={nodes?.table_table_mat_0_9?.geometry} material={materials?.cables_mat} />
          <mesh geometry={nodes?.table_table_mat_0_10?.geometry} material={materials?.props_mat} />
          <mesh geometry={nodes?.table_table_mat_0_11?.geometry} material={materials?.ground_mat} />
          <mesh geometry={nodes?.table_table_mat_0_12?.geometry} material={materials?.key_mat} />
        </>
      )}
    </group>
  );
}
export default HackerRoom;
