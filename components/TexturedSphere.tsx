import { useTexture } from '@react-three/drei';

const TexturedSphere = () => {
  const map = useTexture("./textures/metal_plate_diff_1k.png");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[-1,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map}/>
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[1,0,0]}>
        <sphereGeometry args={[1, 100, 100]}/>
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.05}
        />
      </mesh>
    </>
  );
};

export default TexturedSphere;