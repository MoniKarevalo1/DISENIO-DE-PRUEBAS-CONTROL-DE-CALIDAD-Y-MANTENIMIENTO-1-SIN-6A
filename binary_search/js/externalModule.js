function fetchData() {
  // Simula una llamada externa (API, base de datos, etc.)
  return Promise.resolve({ value: 42 }); //Creación de módulo externo simulado
}

module.exports = { fetchData };
