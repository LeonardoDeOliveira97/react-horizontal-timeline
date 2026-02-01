import { useState } from 'react';

export const useZoom = (initialZoom = 1, minZoom = 0.5, maxZoom = 3, step = 0.2) => {
  const [zoomLevel, setZoomLevel] = useState(initialZoom);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + step, maxZoom));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - step, minZoom));
  };

  const resetZoom = () => {
    setZoomLevel(initialZoom);
  };

  return {
    zoomLevel,
    handleZoomIn,
    handleZoomOut,
    resetZoom
  };
};