const fetch = require("node-fetch");
const { Pact } = require("@pact-foundation/pact");
const path = require("path");

// Configuración del proveedor de Pact
const provider = new Pact({
  consumer: "BinarySearchConsumer",
  provider: "ExternalModuleProvider",
  port: 1234,
  dir: path.resolve(process.cwd(), "pacts"), // aquí se guardará el contrato generado
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "INFO"
});

// Ejemplo de interacción de consumidor
describe("Consumer contract test", () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  beforeAll(() =>
    provider.addInteraction({
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
    })
  );

  // Prueba que verifica el contrato
  it("should receive the expected response", async () => {
    const response = await fetch("http://localhost:1234/data");
    const json = await response.json();
    expect(json).toEqual({ value: 10 });
  });
});
