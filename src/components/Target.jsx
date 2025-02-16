import { Float, useGLTF } from '@react-three/drei';

const Target = (props) => {
  const { nodes, materials } = useGLTF('models/chapeu.glb');

  return (
    <Float floatIntensity={1} floatingRange={[0.1, 0.15]}>
      <group position={[5, 55, 0]} scale={0.3} {...props} dispose={null}>
        {nodes?.Object_2 && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
            position={[1, 63, 15]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.759}
          />
        )}
      </group>
    </Float>
  );
};

useGLTF.preload('models/chapeu.glb');
export default Target;
