
const data = require("./toolsData.json");

// Función para calcular media
function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// Función para calcular varianza
function variance(arr) {
  const m = mean(arr);
  return arr.reduce((a, b) => a + Math.pow(b - m, 2), 0) / arr.length;
}

// Función para correlación de Pearson entre dos conjuntos
function correlation(x, y) {
  const mx = mean(x), my = mean(y);
  const num = x.map((xi, i) => (xi - mx) * (y[i] - my)).reduce((a, b) => a + b, 0);
  const den = Math.sqrt(
    x.map(xi => Math.pow(xi - mx, 2)).reduce((a, b) => a + b, 0) *
    y.map(yi => Math.pow(yi - my, 2)).reduce((a, b) => a + b, 0)
  );
  return num / den;
}

describe("Análisis estadístico de herramientas", () => {
  it("calcula medias y varianzas", () => {
    console.log("Media TestCraft:", mean(data.TestCraft));
    console.log("Varianza TestCraft:", variance(data.TestCraft));
    console.log("Media Jasmine:", mean(data.Jasmine));
    console.log("Varianza Jasmine:", variance(data.Jasmine));
    console.log("Media Selenium:", mean(data.Selenium));
    console.log("Varianza Selenium:", variance(data.Selenium));
  });

  it("calcula correlación entre Jasmine y Selenium", () => {
    console.log("Correlación:", correlation(data.Jasmine, data.Selenium));
  });
});
