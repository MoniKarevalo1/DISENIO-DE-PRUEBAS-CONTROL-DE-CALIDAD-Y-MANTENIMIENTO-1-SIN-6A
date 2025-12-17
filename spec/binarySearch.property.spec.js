const fetch = require("node-fetch");
const { Pact } = require("@pact-foundation/pact");
const path = require("path");

const provider = new Pact({
  consumer: "BinarySearchConsumer",
  provider: "ExternalModuleProvider",
  port: 1234,
  dir: path.resolve(process.cwd(), "pacts"),
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "INFO"
});

describe("Consumer contract test", () => {
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

  afterAll(async () => {
    await provider.finalize(); // usa finalize en tu versión
  });
});
