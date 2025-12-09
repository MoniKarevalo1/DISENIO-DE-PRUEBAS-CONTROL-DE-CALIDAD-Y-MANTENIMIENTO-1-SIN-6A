type TestCase = { name: string; fn: () => Promise<void> | void };
type Suite = { name: string; tests: TestCase[]; beforeAll?: () => Promise<void> | void; afterAll?: () => Promise<void> | void };

const suites: Suite[] = [];
let currentSuite: Suite | null = null;

export function describe(name: string, fn: () => void) {
  const suite: Suite = { name, tests: [] };
  suites.push(suite);
  currentSuite = suite;
  fn();
  currentSuite = null;
}

export function it(name: string, fn: () => Promise<void> | void) {
  if (!currentSuite) throw new Error(`'it' must be inside 'describe'`);
  currentSuite.tests.push({ name, fn });
}

export function beforeAll(fn: () => Promise<void> | void) {
  if (!currentSuite) throw new Error(`'beforeAll' must be inside 'describe'`);
  currentSuite.beforeAll = fn;
}

export function afterAll(fn: () => Promise<void> | void) {
  if (!currentSuite) throw new Error(`'afterAll' must be inside 'describe'`);
  currentSuite.afterAll = fn;
}

export async function runAll() {
  let passed = 0, failed = 0;
  for (const s of suites) {
    console.log(`\nSuite: ${s.name}`);
    if (s.beforeAll) await s.beforeAll();
    for (const t of s.tests) {
      try { await t.fn(); console.log(`  ✓ ${t.name}`); passed++; }
      catch (e: any) { console.log(`  ✗ ${t.name}`); console.log(`    → ${e.message}`); failed++; }
    }
    if (s.afterAll) await s.afterAll();
  }
  console.log(`\nResult: ${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
}
