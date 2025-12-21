// Datos históricos: tamaño del arreglo vs tiempo de ejecución (ms)
// Estos datos pueden venir de una tabla en Google Drive/OneDrive
const data = [
  { x: 1000, y: 0.05 },
  { x: 5000, y: 0.12 },
  { x: 10000, y: 0.36 },
  { x: 20000, y: 0.80 }
];

// Función para calcular regresión lineal (pendiente y intercepto)
function linearRegression(data) {
  const n = data.length;
  const sumX = data.reduce((acc, d) => acc + d.x, 0);
  const sumY = data.reduce((acc, d) => acc + d.y, 0);
  const sumXY = data.reduce((acc, d) => acc + d.x * d.y, 0);
  const sumX2 = data.reduce((acc, d) => acc + d.x * d.x, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

// Aplicamos el modelo
const { slope, intercept } = linearRegression(data);

// Predicción: tiempo estimado para un arreglo de 15000 elementos
const predicted = slope * 15000 + intercept;

console.log(`Modelo: y = ${slope.toFixed(6)}x + ${intercept.toFixed(6)}`);
console.log(`Predicción para 15000 elementos: ${predicted.toFixed(4)} ms`);
