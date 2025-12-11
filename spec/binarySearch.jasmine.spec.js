// Importamos las funciones de búsqueda binaria
const {
  findIndex, contains, find,
  findLeftmostIndex, findRightmostIndex,
  findAllIndices, findLeftmost, findRightmost, findAll
} = require('../binarySearch');

// Suite de pruebas con Jasmine
describe('Binary Search (Jasmine)', () => {
  // Caso: valor existente
  it('finds index of existing value', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 7)).toBe(3); // debe devolver índice correcto
  });

  // Caso: valor no encontrado
  it('returns null when value not found', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 4)).toBe(null); // debe devolver null
  });

  // Caso: contains
  it('contains works correctly', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(contains(arr, 5)).toBeTrue();  // valor existe
    expect(contains(arr, 6)).toBeFalse(); // valor no existe
  });

  // Caso: find
  it('find returns the element or null', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(find(arr, 5)).toBe(5);     // devuelve elemento
    expect(find(arr, 6)).toBe(null);  // devuelve null
  });
});
