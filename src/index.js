import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import Timeline from "./components/Timeline/Timeline.jsx";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">
        Project Horizontal Timeline
      </h1>

      <Timeline items={timelineItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);