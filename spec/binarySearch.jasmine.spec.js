// Importamos las funciones de búsqueda binaria
const {
  findIndex, contains, find,
  findLeftmostIndex, findRightmostIndex,
  findAllIndices, findLeftmost, findRightmost, findAll
} = require("../binary_search/js/binarySearchLogic"); // uta corregida

const externalModule = require("../binary_search/js/externalModule"); // import fuera del describe

// Suite de pruebas con Jasmine
describe("Binary Search (Jasmine)", () => {
  // Caso: valor existente
  it("finds index of existing value", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 7)).toBe(3);
  });

  // Caso: valor no encontrado
  it("returns null when value not found", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 4)).toBeNull();
  });

  // Caso: contains
  it("contains works correctly", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(contains(arr, 5)).toBeTrue();
    expect(contains(arr, 6)).toBeFalse();
  });

  // Caso: find
  it("find returns the element or null", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(find(arr, 5)).toBe(5);
    expect(find(arr, 6)).toBeNull();
  });
});

describe("Mocking avanzado con Jasmine", () => {
  it("simula el módulo externo con espía personalizado", async () => {
    // 1️⃣ Interceptamos la función externa
    spyOn(externalModule, "fetchData").and.callFake(() => {
      return Promise.resolve({ value: 10 }); // simulamos respuesta
    });

    // 2️⃣ Ejecutamos la función que depende del módulo
    const result = await logic.processExternalData();

    // 3️⃣ Verificamos que se llamó al módulo
    expect(externalModule.fetchData).toHaveBeenCalled();

    // 4️⃣ Validamos el resultado simulado
    expect(result).toBe(20);
  });
});
