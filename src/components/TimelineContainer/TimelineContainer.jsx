import React from 'react';
import Timeline from '../Timeline/Timeline.jsx';

const TimelineContainer = ({ 
  zoomLevel, 
  items, 
  editingItemId, 
  onNameChange, 
  onStartEdit, 
  onStopEdit 
}) => {
  return (
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
          onNameChange={onNameChange}
          onStartEdit={onStartEdit}
          onStopEdit={onStopEdit}
        />
      </div>
    </div>
  );
};

export default TimelineContainer;