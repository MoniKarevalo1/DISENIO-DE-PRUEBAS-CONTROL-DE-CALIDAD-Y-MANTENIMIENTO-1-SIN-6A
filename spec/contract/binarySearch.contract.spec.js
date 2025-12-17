// Importamos las funciones de búsqueda binaria
const {
  findIndex,
  contains,
  find,
  findLeftmostIndex,
  findRightmostIndex,
  findAllIndices,
  findLeftmost,
  findRightmost,
  findAll
} = require("../../binary_search/js/binarySearchLogic");

describe("Contract testing: binary search functions", () => {
  // Caso básico: el contrato dice que si el elemento existe, devuelve su índice
  it("findIndex returns correct index when element exists", () => {
    expect(findIndex([1,2,3,4,5], 3)).toBe(2);
  });

  // Contrato: si el elemento no existe, devuelve null
  it("findIndex returns null when element does not exist", () => {
    expect(findIndex([1,2,3,4,5], 10)).toBeNull();
  });

  // Contrato de contains: devuelve true si existe, false si no
  it("contains respects contract (true if exists, false otherwise)", () => {
    expect(contains([1,2,3,4,5], 4)).toBeTrue();
    expect(contains([1,2,3,4,5], 9)).toBeFalse();
  });

  // Contrato de find: devuelve el elemento o null
  it("find returns element or null", () => {
    expect(find([1,2,3], 2)).toBe(2);
    expect(find([1,2,3], 9)).toBeNull();
  });

  // Contrato de índices repetidos: debe devolver el más a la izquierda
  it("findLeftmostIndex returns leftmost index for duplicates", () => {
    expect(findLeftmostIndex([1,2,2,2,3], 2)).toBe(1);
  });

  // Contrato de índices repetidos: debe devolver el más a la derecha
  it("findRightmostIndex returns rightmost index for duplicates", () => {
    expect(findRightmostIndex([1,2,2,2,3], 2)).toBe(3);
  });

  // Contrato: findAllIndices devuelve todos los índices donde aparece el valor
  it("findAllIndices returns all indices for duplicates", () => {
    expect(findAllIndices([1,2,2,2,3], 2)).toEqual([1,2,3]);
  });

  // Contrato: findAll devuelve todos los elementos que coinciden
  it("findAll returns all elements for duplicates", () => {
    expect(findAll([1,2,2,2,3], 2)).toEqual([2,2,2]);
  });
});
