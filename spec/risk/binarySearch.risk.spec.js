// Importamos la función binarySearch desde nuestro archivo de lógica
const { binarySearch } = require("../../binary_search/js/binarySearchLogic");

// Importamos el módulo 'fs' de Node.js para poder escribir archivos en disco
const fs = require("fs");

// Definimos un bloque de pruebas Jasmine para casos basados en riesgo
describe("Binary Search – Risk Analysis", () => {
  // Arreglo donde guardaremos los resultados de cada caso con su nivel de riesgo
  const riskResults = [];

  // Caso de ALTO riesgo: buscar en un arreglo vacío
  // Probabilidad alta de error + impacto crítico
  it("High risk: empty array search", () => {
    const arr = []; // arreglo vacío
    const target = 5; // valor a buscar
    const result = binarySearch(arr, target); // ejecución de la función
    // Guardamos evidencia con clasificación de riesgo
    riskResults.push({case:"Empty array", prob:"Alta", impact:"Crítico", nivel:"Alto", result});
    // Validamos que el resultado sea nulo (no encontrado)
    expect(result).toBeNull();
  });

  // Caso de MEDIO riesgo: arreglo pequeño con target inexistente
  // Probabilidad media de error + impacto moderado
  it("Medium risk: small array with target not found", () => {
    const arr = [1, 2, 3]; // arreglo pequeño
    const target = 10; // valor que no existe en el arreglo
    const result = binarySearch(arr, target);
    riskResults.push({case:"Small array, target not found", prob:"Media", impact:"Moderado", nivel:"Medio", result});
    expect(result).toBeNull(); // debe devolver null
  });

  // Caso de BAJO riesgo: arreglo grande con target presente
  // Probabilidad baja de error + impacto bajo
  it("Low risk: large array with target present", () => {
    const arr = Array.from({length: 100}, (_, i) => i); // arreglo de 0 a 99
    const target = 50; // valor que sí existe
    const result = binarySearch(arr, target);
    riskResults.push({case:"Large array, target present", prob:"Baja", impact:"Bajo", nivel:"Bajo", result});
    expect(result).toBe(target); // debe devolver la posición correcta
  });

  // Al finalizar todas las pruebas, generamos un reporte HTML con los resultados
  afterAll(() => {
    // Construimos un HTML con tabla de riesgos
    const html = `
      <html><body>
      <h2>Reporte de Priorización de Riesgos</h2>
      <table border="1">
        <tr><th>Caso</th><th>Probabilidad</th><th>Impacto</th><th>Nivel</th><th>Resultado</th></tr>
        ${riskResults.map(r => `<tr><td>${r.case}</td><td>${r.prob}</td><td>${r.impact}</td><td>${r.nivel}</td><td>${r.result}</td></tr>`).join("")}
      </table>
      </body></html>`;
    
    // Guardamos el archivo en disco
    fs.writeFileSync("risk-report.html", html);
    console.log("Reporte de riesgos generado: risk-report.html");
  });
});
