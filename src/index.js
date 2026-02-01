import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import Timeline from "./components/Timeline/Timeline.jsx";

function App() {
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3)); // Máximo 3x zoom
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5)); // Mínimo 0.5x zoom
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        Project Horizontal Timeline
      </h1>

      <div className="zoom-controls">
        <button className="zoom-btn" onClick={handleZoomOut}>-</button>
        <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
        <button className="zoom-btn" onClick={handleZoomIn}>+</button>
      </div>

      <div className="timeline-container">
        <div 
          className="timeline-zoom-wrapper"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'left top'
          }}
        >
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);