export type category = "Technology" | "Development" | "Strategy" | "Graphic Design";

export const catColor = (type: category) => {
  const color = {
    Development: 'orange',
    Strategy: 'red',
    'Graphic Design': 'blue',
    Technology: 'green'
  };

  return color[type];
};
