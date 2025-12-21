// Archivo: spec/reliability/binarySearch.reliability.spec.js
// Importamos Jasmine y los tiempos simulados
const tiempos = require("./tiempos.json");

// Parámetro de tasa de fallas (λ)
const lambda = 0.01;

// Función de confiabilidad exponencial: R(t) = e^(-λt)
function confiabilidad(t) {
  return Math.exp(-lambda * t);
}

describe("Modelo predictivo de confiabilidad", () => {
  tiempos.forEach((t) => {
    it(`calcula confiabilidad en tiempo t=${t}`, () => {
      const R = confiabilidad(t);
      // Validamos que la confiabilidad esté entre 0 y 1
      expect(R).toBeGreaterThanOrEqual(0);
      expect(R).toBeLessThanOrEqual(1);
      console.log(`Tiempo ${t}: Confiabilidad = ${R.toFixed(4)}`);
    });
  });
});
