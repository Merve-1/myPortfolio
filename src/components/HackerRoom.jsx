import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      {nodes && materials && (
        <>
          <mesh geometry={nodes?.computer_computer_mat_0?.geometry} material={materials?.computer_mat}>
            <meshStandardMaterial map={monitorTexture} />
          </mesh>

          <mesh geometry={nodes?.screen_screens_0?.geometry} material={materials?.screens}>
            <meshStandardMaterial map={screenTexture} />
          </mesh>

          {/* Additional Objects */}
          {Object.keys(nodes).map((key) => (
            <mesh key={key} geometry={nodes[key]?.geometry} material={materials[key]} />
          ))}
        </>
      )}
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
export default HackerRoom;
