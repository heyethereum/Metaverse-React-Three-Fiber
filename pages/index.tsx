import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import TexturedSphere from '../components/TexturedSphere';

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className='container'>
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 5, 5]} />
        <TexturedSphere />
      </Canvas>
    </div>
  );
};

export default Home
