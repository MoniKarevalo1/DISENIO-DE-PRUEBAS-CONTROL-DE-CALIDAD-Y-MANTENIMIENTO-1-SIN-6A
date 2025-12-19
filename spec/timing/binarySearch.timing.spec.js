const { binarySearch } = require("../../binary_search/js/binarySearchLogic");

describe("Binary Search Timing", () => {
  it("should measure execution time", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    const target = 9999;

    const start = process.hrtime.bigint();
    binarySearch(arr, target);
    const end = process.hrtime.bigint();

    const durationMs = Number(end - start) / 1e6;
    console.log(`Execution time: ${durationMs.toFixed(4)} ms`);

    expect(durationMs).toBeGreaterThan(0);
  });
});
