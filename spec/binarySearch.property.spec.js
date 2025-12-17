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
    await provider.setup(); // levanta el mock server
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
    const response = await fetch("http://127.0.0.1:1234/data");
    const json = await response.json();
    expect(json).toEqual({ value: 10 });
  });

  afterAll(async () => {
    await provider.writePact(); // escribe el contrato pactado
    await provider.stop();      // cierra el mock server
  });
});
