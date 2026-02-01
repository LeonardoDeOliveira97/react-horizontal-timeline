import React from 'react';

const ZoomControls = ({ zoomLevel, onZoomIn, onZoomOut }) => {
  return (
    <div className="zoom-controls">
      <button className="zoom-btn" onClick={onZoomOut}>-</button>
      <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
      <button className="zoom-btn" onClick={onZoomIn}>+</button>
      <span className="edit-hint">Double-click any item to edit its name</span>
    </div>
  );
};

export default ZoomControls;