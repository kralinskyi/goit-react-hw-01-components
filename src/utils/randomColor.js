export function generateRandomColor() {
  // Генеруємо випадкові значення для каналів RGB (червоний, зелений, синій)
  const red = Math.floor(Math.random() * 256); // Від 0 до 255
  const green = Math.floor(Math.random() * 256); // Від 0 до 255
  const blue = Math.floor(Math.random() * 256); // Від 0 до 255

  // Створюємо рядок з кольором у форматі RGB
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  return randomColor;
}
