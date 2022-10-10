import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats, useTexture } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/ground';

const TempSphere = () => {
  
  const map = useTexture("./textures/metal_plate_diff_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");

  return (
    <>
        <mesh scale={[0.5, 0.5, 0.5]} position={[0,1,0]} castShadow>
          <sphereGeometry />
          <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap} />
        </mesh>

    </>
  );
}

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className='container'>
      <Canvas shadows>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        <TempSphere />
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home
