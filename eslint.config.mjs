// Archivo de configuración de ESLint en formato Flat Config.
// Este formato es el que espera ESLint moderno (>= v8.21).
// Aquí definimos reglas y opciones de análisis para todo el proyecto.

import js from "@eslint/js";       // Configuración recomendada de ESLint
import globals from "globals";     // Conjunto de variables globales comunes

export default [
  js.configs.recommended,          // Incluye reglas básicas recomendadas
  {
    files: ["**/*.js"],            // Aplica a todos los archivos .js
    languageOptions: {
      ecmaVersion: "latest",       // Usa la versión más reciente de ECMAScript
      sourceType: "module",        // Permite usar import/export
      globals: {
        ...globals.node,           // Variables globales de Node.js
        ...globals.es2021,         // Variables globales de ES2021
        jasmine: true              // Reconoce describe, it, expect en pruebas
      },
    },
    rules: {
      semi: ["error", "always"],   // Exige punto y coma al final de cada línea
      "no-unused-vars": "warn",    // Advierte sobre variables no usadas
      "no-console": "off"          // Permite usar console.log en evidencias
    },
  },
];
