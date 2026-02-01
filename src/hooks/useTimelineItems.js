import { useState } from 'react';

export const useTimelineItems = (initialItems) => {
  const [items, setItems] = useState(initialItems);
  const [editingItemId, setEditingItemId] = useState(null);

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

  return {
    items,
    editingItemId,
    handleNameChange,
    handleStartEdit,
    handleStopEdit
  };
};