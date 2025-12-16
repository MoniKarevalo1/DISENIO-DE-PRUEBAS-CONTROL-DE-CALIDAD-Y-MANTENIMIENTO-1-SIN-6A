const { Pact } = require("@pact-foundation/pact");
const path = require("path");
const fetch = require("node-fetch");
const logic = require("../../binary_search/js/binarySearchLogic");

describe("Contract: processExternalData consumer pact", () => {
  const provider = new Pact({
    consumer: "BinarySearchConsumer",
    provider: "ExternalModuleProvider",
    port: 1234,
    dir: path.resolve(process.cwd(), "pacts"),
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    logLevel: "INFO"
  });

  beforeAll(async () => {
    await provider.setup();
    await provider.addInteraction({
      state: "provider has data",
      uponReceiving: "a request for external data",
      withRequest: {
        method: "GET",
        path: "/data"
      },
      willRespondWith: {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: { value: 10 }
      }
    });
  });

  it("should receive the expected response", async () => {
    const response = await fetch("http://localhost:1234/data");
    const json = await response.json();
    expect(json).toEqual({ value: 10 });
  });

  it("processExternalData doubles the value", async () => {
    const result = await logic.processExternalData(() =>
      Promise.resolve({ value: 10 })
    );
    expect(result).toBe(20);
  });

  afterAll(async () => {
    await provider.verify();     // método correcto en v16
    await provider.writePact();  // genera el contrato .pact
    await provider.cleanup();    // detiene el mock server
  });
});
