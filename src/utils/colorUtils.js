// Função para gerar cores aleatórias consistentes baseadas no ID do item
export const generateItemColor = (itemId) => {
  // Define uma palette de cores harmoniosas
  const colors = [
    '#4f46e5', // Indigo
    '#7c3aed', // Purple
    '#db2777', // Pink
    '#dc2626', // Red
    '#ea580c', // Orange
    '#d97706', // Amber
    '#65a30d', // Lime
    '#16a34a', // Green
    '#059669', // Emerald
    '#0d9488', // Teal
    '#0891b2', // Cyan
    '#0284c7', // Blue
    '#2563eb', // Blue
    '#4338ca'  // Indigo
  ];

  // Usa o ID para garantir consistência na cor
  const colorIndex = itemId % colors.length;
  return colors[colorIndex];
};

// Função para gerar cores mais vibrantes aleatoriamente
export const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
  const lightness = Math.floor(Math.random() * 20) + 45; // 45-65%
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// Função para verificar se uma cor é muito clara e ajustar o texto
export const getTextColor = (backgroundColor) => {
  // Para cores HSL, podemos usar uma lógica simples
  return '#ffffff'; // Por enquanto, sempre branco
};