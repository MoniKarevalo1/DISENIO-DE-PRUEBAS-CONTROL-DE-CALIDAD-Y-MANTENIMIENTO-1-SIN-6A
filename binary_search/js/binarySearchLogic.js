const externalModule = require("./externalModule");

function processExternalData() {
  return externalModule.fetchData().then(data => data.value * 2); // Creación de función
}

module.exports = { processExternalData };
