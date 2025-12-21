const { binarySearch } = require("../../../binary_search/js/binarySearchLogic");

describe("Binary Search Mutation (nuevo set)", () => {
  it("ejecuta casos básicos para mutación", () => {
    const arr = [1, 2, 3];
    binarySearch(arr, 2);
    binarySearch(arr, 5);
  });
});
