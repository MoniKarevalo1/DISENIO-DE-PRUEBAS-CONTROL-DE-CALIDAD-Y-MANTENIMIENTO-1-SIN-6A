const { binarySearch } = require("../../../binary_search/js/binarySearchLogic");

describe("Binary Search Unit Tests (nuevo set)", () => {
  it("devuelve índice correcto si el elemento existe", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 3)).toBe(2);
  });

  it("devuelve null si el elemento no existe", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 10)).toBeNull();
  });
});
