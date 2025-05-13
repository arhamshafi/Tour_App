import React from 'react';
import '@google/model-viewer';

function ModelViewer() {
  return (
    <model-viewer
      src="/a7e5d14678b24e23b95467c38ff6c234.glb"
      alt="3D Model"
      auto-rotate
      camera-controls
       disable-tap
      style={{ width: '100%', height: '390px', cursor: 'default' }}
    ></model-viewer>
  );
}

export default ModelViewer;
