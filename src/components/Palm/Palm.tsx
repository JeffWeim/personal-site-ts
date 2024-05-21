'use client';
import useDarkMode from 'use-dark-mode';
import { ModelViewerWrapper } from './styles';

const Palm = () => {
  const dm = useDarkMode(true);

  return (
    <ModelViewerWrapper>
      <model-viewer
        tabIndex={1}
        loading="lazy"
        src="/tree_palmDetailedShort.glb"
        shadow-intensity="0.5"
        min-camera-orbit="auto auto 2.5m"
        max-camera-orbit="auto auto 5m"
        camera-orbit="404.8deg 77.08deg 4.75m"
        field-of-view="45deg"
        exposure={dm.value ? '.25' : '0.55'}
        camera-target="0m 1.25m 0m"
        auto-rotate={true}
        auto-rotate-delay="001"
        style={{
          position: 'fixed',
          bottom: '0',
          right: '-30vw',
          height: '100vw',
          width: '100%',
          zIndex: '-1',
          outline: 'none',
          pointerEvents: 'none',
          transform: 'translateX(0%)',
        }}
      />
    </ModelViewerWrapper>
  );
};

export default Palm;
