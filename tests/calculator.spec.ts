import { describe, it } from "../src/core/registry";
import { expect } from "../src/core/assert";

describe("Calculator Suite", () => {
  it("adds numbers", () => {
    expect(5 + 5).toBe(10);
  });
});
