// src/core/assert.ts

interface Matchers {
  toBe(expected: unknown): void;
  toEqual(expected: unknown): void;
  toThrow(): void;
}

export const expect = (received: unknown): Matchers => {
  return {
    toBe(expected: unknown): void {
      if (received !== expected) {
        throw new Error(`Expected ${String(received)} to be ${String(expected)}`);
      }
    },

    toEqual(expected: unknown): void {
      const r = JSON.stringify(received);
      const e = JSON.stringify(expected);
      if (r !== e) {
        throw new Error(`Expected ${r} to equal ${e}`);
      }
    },

    toThrow(): void {
      if (typeof received !== "function") {
        throw new Error(`toThrow expects a function, got ${typeof received}`);
      }
      let threw = false;
      try {
        (received as Function)();
      } catch {
        threw = true;
      }
      if (!threw) {
        throw new Error(`Expected function to throw`);
      }
    },
  };
};
