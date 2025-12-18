// Importamos la API de rendimiento de Node.js
// 'performance.now()' nos permite medir tiempos en milisegundos con alta precisión
const { performance } = require('perf_hooks');

// Importamos la función de búsqueda binaria desde nuestro archivo de lógica
const { binarySearch } = require('../binary_search/js/binarySearchLogic');

// Definimos un bloque de pruebas con Jasmine
describe("Binary Search Timing Tests", () => {

  // Caso de prueba: medir el tiempo de ejecución de binarySearch
  it("should measure execution time for binarySearch", () => {
    // Creamos un arreglo grande de 10,000 elementos ordenados
    const arr = Array.from({length: 10000}, (_, i) => i);

    // Definimos el valor que queremos buscar (último elemento)
    const target = 9999;

    // Guardamos el tiempo de inicio antes de ejecutar la función
    const start = performance.now();

    // Ejecutamos la función de búsqueda binaria
    const result = binarySearch(arr, target);

    // Guardamos el tiempo de finalización después de ejecutar la función
    const end = performance.now();

    // Mostramos el tiempo en consola como evidencia
    console.log(`Execution time: ${(end - start).toFixed(4)} ms`);

    // Validamos que el resultado sea correcto (el índice encontrado debe ser igual al target)
    expect(result).toBe(target);
  });
});
