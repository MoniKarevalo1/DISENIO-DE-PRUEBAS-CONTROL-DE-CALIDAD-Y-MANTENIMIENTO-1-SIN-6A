const request = require("supertest");
const express = require("express");
const { processExternalData } = require("../../binary_search/js/binarySearchLogic");

describe("Contract: processExternalData consumer", () => {
  let app;
  beforeAll(() => {
    app = express();
    app.get("/data", (req, res) => res.json({ value: 10 }));
  });

  //Se verifica que el proveedor cumple con el contrato

  it("should receive the expected response", async () => {
    const res = await request(app).get("/data");
    expect(res.body).toEqual({ value: 10 });
  });

  it("processExternalData doubles the value", async () => {
    const fetcher = async () => ({ value: 10 });
    const result = await processExternalData(fetcher);
    expect(result).toBe(20);
  });
});

