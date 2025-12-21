// Importamos la función binarySearch
const { binarySearch } = require("../../binary_search/js/binarySearchLogic");
// Importamos los casos desde JSON
const casos = require("./casos.json");

describe("Automatización sin código - casos desde JSON", () => {
  // Iteramos automáticamente sobre cada caso
  casos.forEach(({ arr, target, esperado }) => {
    it(`busca ${target} en [${arr}]`, () => {
      const resultado = binarySearch(arr, target);
      expect(resultado).toBe(esperado);
    });
  });
});
