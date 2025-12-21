// Este archivo integra el análisis estático dentro de Jasmine.
// Sirve como evidencia de que el código binarySearchLogic.js
// cumple con las reglas de estilo y sintaxis definidas en ESLint.

// Importamos la clase ESLint desde la librería instalada en el proyecto
const { ESLint } = require("eslint");

describe("Static Analysis of binarySearchLogic.js", () => {
  it("should detect style or syntax issues", async () => {
    // Creamos una instancia de ESLint sin configuración embebida.
    // Esto hace que ESLint use el archivo externo de configuración:
    // eslint.config.mjs (Flat Config) o .eslintrc.json (clásico).
    const eslint = new ESLint();

    // Ejecutamos el análisis sobre el archivo de lógica
    const results = await eslint.lintFiles(["binary_search/js/binarySearchLogic.js"]);

    // Mostramos en consola los resultados de cada archivo analizado
    results.forEach(result => {
      console.log(`Archivo analizado: ${result.filePath}`);
      result.messages.forEach(msg => {
        console.log(`Línea ${msg.line}, Col ${msg.column}: ${msg.message} [${msg.ruleId}]`);
      });
    });

    // Verificamos si hubo errores de estilo/sintaxis
    const hasErrors = results.some(r => r.errorCount > 0);

    // La expectativa de Jasmine: no debe haber errores
    expect(hasErrors).toBe(false);
  });
});
