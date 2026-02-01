import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import ZoomControls from "./components/ZoomControls/ZoomControls.jsx";
import TimelineContainer from "./components/TimelineContainer/TimelineContainer.jsx";
import { useZoom } from "./hooks/useZoom.js";
import { useTimelineItems } from "./hooks/useTimelineItems.js";

function App() {
  const { zoomLevel, handleZoomIn, handleZoomOut } = useZoom();
  const {
    items,
    editingItemId,
    handleNameChange,
    handleStartEdit,
    handleStopEdit
  } = useTimelineItems(timelineItems);

  return (
    <div className="app-container">
      <a href="#timeline" className="skip-link">
        Skip to timeline
      </a>
      
      <header>
        <h1 className="app-title">
          Project Horizontal Timeline
        </h1>
      </header>

      <main>
        <ZoomControls
          zoomLevel={zoomLevel}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />

        <section 
          id="timeline"
          aria-labelledby="timeline-title"
        >
          <h2 id="timeline-title" className="sr-only">
            Timeline View
          </h2>
          <TimelineContainer
            zoomLevel={zoomLevel}
            items={items}
            editingItemId={editingItemId}
            onNameChange={handleNameChange}
            onStartEdit={handleStartEdit}
            onStopEdit={handleStopEdit}
          />
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);