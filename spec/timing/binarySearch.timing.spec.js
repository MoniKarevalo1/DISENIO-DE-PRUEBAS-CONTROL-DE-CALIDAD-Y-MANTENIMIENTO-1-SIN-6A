// Importamos la función binarySearch desde el archivo donde está implementada.
// Esta función realiza una búsqueda binaria en un arreglo ordenado.
const { binarySearch } = require("../../binary_search/js/binarySearchLogic");

// Definimos un bloque de pruebas con Jasmine.
// "describe" agrupa pruebas relacionadas bajo un mismo título.
describe("Binary Search Timing", () => {

  // Caso de prueba: medir el tiempo de ejecución de la búsqueda binaria.
  it("should measure execution time", () => {
    // Creamos un arreglo de 10,000 elementos ordenados: [0, 1, 2, ..., 9999].
    // Array.from genera el arreglo, y (_, i) => i asigna cada índice como valor.
    const arr = Array.from({ length: 10000 }, (_, i) => i);

    // Definimos el valor que queremos buscar: el último elemento (9999).
    const target = 9999;

    // Guardamos el tiempo inicial en nanosegundos usando process.hrtime.bigint().
    // Esta función da una medición de alta resolución, más precisa que Date.now().
    const start = process.hrtime.bigint();

    // Ejecutamos la búsqueda binaria sobre el arreglo.
    binarySearch(arr, target);

    // Guardamos el tiempo final en nanosegundos.
    const end = process.hrtime.bigint();

    // Calculamos la duración en milisegundos:
    // - end - start → diferencia en nanosegundos.
    // - Number(...) convierte BigInt a número.
    // - / 1e6 → pasamos de nanosegundos a milisegundos.
    const durationMs = Number(end - start) / 1e6;

    // Mostramos el tiempo de ejecución en consola con 4 decimales.
    console.log(`Execution time: ${durationMs.toFixed(4)} ms`);

    // Verificamos que el tiempo de ejecución sea mayor que 0 ms.
    // Esto asegura que la medición se realizó correctamente.
    expect(durationMs).toBeGreaterThan(0);
  });
});
