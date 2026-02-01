// Accessibility key constants
export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown'
};

// Function to check if a key is an activation key
export const isActivationKey = (key) => {
  return key === KEYS.ENTER || key === KEYS.SPACE;
};

// Generate a unique ID for accessibility purposes
export const generateA11yId = (prefix) => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};