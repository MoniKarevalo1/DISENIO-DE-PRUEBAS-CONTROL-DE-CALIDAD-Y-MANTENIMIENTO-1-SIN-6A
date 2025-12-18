// Importamos la función binarySearch desde nuestro archivo de lógica
const { binarySearch } = require("../binary_search/js/binarySearchLogic");

// Generador simple de combinaciones (producto cartesiano)
// Recibe un arreglo de parámetros y devuelve todas las combinaciones posibles
function generateCombinations(parameters) {
  const results = [];
  const [arrs, targets, keyFns] = parameters; // desestructuramos los tres grupos de parámetros
  for (const arr of arrs) {          // recorremos los diferentes arreglos
    for (const target of targets) {  // recorremos los diferentes valores objetivo
      for (const keyFn of keyFns) {  // recorremos las funciones de transformación
        results.push([arr, target, keyFn]); // guardamos la combinación
      }
    }
  }
  return results; // devolvemos todas las combinaciones generadas
}

// Definimos un bloque de pruebas Jasmine para casos combinatorios
describe("Binary Search Combinatorial Tests", () => {
  it("should run combinatorial cases automatically", () => {
    // Definimos los parámetros de entrada:
    const parameters = [
      [[], [1], [1,2,3], Array.from({length: 10}, (_, i) => i)], // diferentes arreglos
      [0, 1, 2, 5, 9], // valores objetivo (targets)
      [x => x, x => x * 2] // funciones de transformación (keyFn)
    ];

    // Generamos todas las combinaciones posibles con la función auxiliar
    const combinations = generateCombinations(parameters);

    // Ejecutamos cada combinación como un caso de prueba
    combinations.forEach(([arr, target, keyFn]) => {
      const result = binarySearch(arr, target, keyFn); // aplicamos búsqueda binaria
      // Mostramos evidencia en consola de cada caso ejecutado
      console.log(`Case: arr=${JSON.stringify(arr)}, target=${target}, result=${result}`);
      // Validamos que la función no lance errores en ninguna combinación
      expect(() => binarySearch(arr, target, keyFn)).not.toThrow();
    });
  });
});
