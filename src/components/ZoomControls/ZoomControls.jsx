import React from 'react';

const ZoomControls = ({ zoomLevel, onZoomIn, onZoomOut }) => {
  const currentZoom = Math.round(zoomLevel * 100);
  
  return (
    <div 
      className="zoom-controls"
      role="toolbar"
      aria-label="Timeline zoom controls"
    >
      <button 
        className="zoom-btn" 
        onClick={onZoomOut}
        aria-label={`Zoom out. Current zoom: ${currentZoom}%`}
        disabled={zoomLevel <= 0.5}
      >
        -
      </button>
      <span 
        className="zoom-level"
        aria-live="polite"
        aria-label={`Current zoom level: ${currentZoom} percent`}
      >
        {currentZoom}%
      </span>
      <button 
        className="zoom-btn" 
        onClick={onZoomIn}
        aria-label={`Zoom in. Current zoom: ${currentZoom}%`}
        disabled={zoomLevel >= 3}
      >
        +
      </button>
      <span 
        className="edit-hint"
        role="status"
        aria-live="polite"
      >
        Double-click any item to edit its name
      </span>
    </div>
  );
};

export default ZoomControls;