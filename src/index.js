import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import Timeline from "./components/Timeline/Timeline.jsx";

function App() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [items, setItems] = useState(timelineItems);
  const [editingItemId, setEditingItemId] = useState(null);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3)); // Máximo 3x zoom
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5)); // Mínimo 0.5x zoom
  };

  const handleNameChange = (itemId, newName) => {
    setItems(prev => prev.map(item =>
      item.id === itemId ? { ...item, name: newName } : item
    ));
  };

  const handleStartEdit = (itemId) => {
    setEditingItemId(itemId);
  };

  const handleStopEdit = () => {
    setEditingItemId(null);
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
        <span className="edit-hint">Double-click any item to edit its name</span>
      </div>

      <div className="timeline-container">
        <div
          className="timeline-zoom-wrapper"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'left top'
          }}
        >
          <Timeline
            items={items}
            editingItemId={editingItemId}
            onNameChange={handleNameChange}
            onStartEdit={handleStartEdit}
            onStopEdit={handleStopEdit}
          />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);