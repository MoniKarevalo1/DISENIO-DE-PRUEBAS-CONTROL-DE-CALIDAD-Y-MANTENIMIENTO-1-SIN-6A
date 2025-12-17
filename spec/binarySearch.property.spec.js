// Importamos Supertest, que nos permite simular peticiones HTTP a un servidor Express
const request = require("supertest");
// Importamos Express para crear un servidor de prueba
const express = require("express");

// Definimos un bloque de pruebas con Jasmine
describe("Consumer contract test with Supertest", () => {
  let app;

  // beforeAll se ejecuta antes de todas las pruebas
  // Aquí configuramos un servidor Express con una ruta /data
  beforeAll(() => {
    app = express();
    // Definimos la ruta /data que devuelve un JSON fijo { value: 10 }
    app.get("/data", (req, res) => {
      res.json({ value: 10 });
    });
  });

  // Caso de prueba: el consumidor espera que /data devuelva { value: 10 }
  it("should receive the expected response", async () => {
    // Usamos Supertest para hacer una petición GET a /data
    const response = await request(app).get("/data");
    // Verificamos que el estado HTTP sea 200 (OK)
    expect(response.status).toBe(200);
    // Verificamos que el cuerpo de la respuesta sea exactamente { value: 10 }
    expect(response.body).toEqual({ value: 10 });
  });
});
