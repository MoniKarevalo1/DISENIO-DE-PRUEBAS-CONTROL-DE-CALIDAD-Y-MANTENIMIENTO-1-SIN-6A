// Este archivo sirve como evidencia de análisis estático sobre binarySearchLogic.js
// Se integra dentro de Jasmine para mostrar resultados en consola.

// Importamos la clase ESLint desde la librería instalada en el proyecto
// Para proyectos CommonJS
const { ESLint } = require("eslint/use-at-your-own-risk");

describe("Static Analysis of binarySearchLogic.js", () => {
  it("should detect style or syntax issues", async () => {
    // Configuración embebida
    const eslint = new ESLint({
      baseConfig: {
        env: { node: true, es2021: true },
        extends: ["eslint:recommended"],
        rules: {
          semi: ["error", "always"],
          "no-unused-vars": "warn"
        }
      },
      overrideConfigFile: null // fuerza a ignorar búsqueda de .eslintrc
    });

    const results = await eslint.lintFiles(["binary_search/js/binarySearchLogic.js"]);

    results.forEach(result => {
      console.log(`Archivo analizado: ${result.filePath}`);
      result.messages.forEach(msg => {
        console.log(`Línea ${msg.line}, Col ${msg.column}: ${msg.message} [${msg.ruleId}]`);
      });
    });

    const hasErrors = results.some(r => r.errorCount > 0);
    expect(hasErrors).toBe(false);
  });
});
