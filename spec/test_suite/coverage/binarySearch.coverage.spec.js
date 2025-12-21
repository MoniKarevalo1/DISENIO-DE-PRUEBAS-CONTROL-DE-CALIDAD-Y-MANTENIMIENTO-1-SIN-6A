const { binarySearch } = require("../../../binary_search/js/binarySearchLogic");

describe("Binary Search Coverage (nuevo set)", () => {
  it("ejecuta búsqueda para medir cobertura", () => {
    const arr = [0, 1, 2, 3, 4, 5];
    binarySearch(arr, 4);
    binarySearch(arr, 10);
  });
});
