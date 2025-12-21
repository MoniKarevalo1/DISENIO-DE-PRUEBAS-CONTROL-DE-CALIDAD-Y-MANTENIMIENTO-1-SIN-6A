// Importamos la función binarySearch desde la lógica principal
const { binarySearch } = require("../../binary_search/js/binarySearchLogic");

// Definimos el bloque de pruebas combinatorias
describe("Pruebas combinatorias de binarySearch", () => {
  
  // Conjunto de casos de prueba con distintas configuraciones
  const casos = [
    // Caso 1: arreglo vacío, buscar un número cualquiera debe devolver null
    { arr: [], target: 5, esperado: null },

    // Caso 2: arreglo con un solo elemento, buscar ese elemento debe devolver índice 0
    { arr: [1], target: 1, esperado: 0 },

    // Caso 3: arreglo con duplicados, buscar el valor duplicado debe devolver el primer índice encontrado
    { arr: [1, 2, 2, 3], target: 2, esperado: 1 },

    // Caso 4: arreglo ordenado, buscar el último elemento debe devolver el último índice
    { arr: [1, 2, 3, 4, 5], target: 5, esperado: 4 },

    // Caso 5: arreglo ordenado, buscar un elemento inexistente debe devolver null
    { arr: [1, 2, 3, 4, 5], target: 10, esperado: null }
  ];

  // Iteramos sobre cada caso y generamos una prueba automática
  casos.forEach(({ arr, target, esperado }) => {
    it(`busca ${target} en [${arr}]`, () => {
      // Ejecutamos la búsqueda binaria
      const resultado = binarySearch(arr, target);

      // Validamos que el resultado coincida con lo esperado
      expect(resultado).toBe(esperado);
    });
  });
});
