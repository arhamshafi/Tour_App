import React from 'react';
import '@google/model-viewer';

function Modalbeach() {
  return (
    <model-viewer
  src="/beach_summer__assets_kit.glb"
  alt="3D Model"
  auto-rotate
  camera-controls
  disable-zoom
  disable-tap
  style={{ width: '100%', height: '100%', cursor: 'default' }}
></model-viewer>

  );
}

export default Modalbeach;
