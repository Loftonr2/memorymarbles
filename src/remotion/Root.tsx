import { Composition } from 'remotion';
import { JarScene } from './JarScene';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MemoryMarblesHero"
        component={JarScene}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
