// Importamos todas las funciones exportadas desde el archivo binarySearchLogic.js.
// Estas funciones implementan búsquedas binarias, validaciones y procesamiento de datos externos.
// Al traerlas aquí, podemos escribir pruebas unitarias que verifiquen su comportamiento.
const {
  findIndex,            
  contains,             
  find,                 
  findLeftmostIndex,   
  findRightmostIndex,   
  findAllIndices,       
  findLeftmost,         
  findRightmost,        
  findAll,              
  processExternalData,  
  binarySearch          
} = require("../../binary_search/js/binarySearchLogic");

// Definimos un bloque de pruebas unitarias con Jasmine.
// Cada "it" representa un caso de prueba independiente.
describe("Pruebas unitarias de binarySearchLogic", () => {

  // Caso 1: binarySearch encuentra un elemento existente en el arreglo.
  it("binarySearch encuentra un elemento existente", () => {
    const arr = [1, 2, 3, 4, 5];
    // Esperamos que al buscar el número 3, devuelva el índice 2 (posición en el arreglo).
    expect(binarySearch(arr, 3)).toBe(2);
  });

  // Caso 2: binarySearch devuelve null si el elemento no existe.
  it("binarySearch devuelve null si no existe", () => {
    const arr = [1, 2, 3, 4, 5];
    // Buscamos el número 10, que no está en el arreglo → debe devolver null.
    expect(binarySearch(arr, 10)).toBeNull();
  });

  // Caso 3: contains detecta si un valor existe en el arreglo.
  it("contains detecta si un valor existe", () => {
    const arr = [1, 2, 3];
    // El número 2 sí existe → true.
    expect(contains(arr, 2)).toBeTrue();
    // El número 5 no existe → false.
    expect(contains(arr, 5)).toBeFalse();
  });

  // Caso 4: findLeftmost y findRightmost manejan duplicados.
  it("findLeftmost y findRightmost manejan duplicados", () => {
    const arr = [1, 2, 2, 2, 3];
    // El primer 2 está en índice 2 → findLeftmost devuelve 2.
    expect(findLeftmost(arr, 2)).toBe(2);
    // En esta implementación, findRightmost también devuelve 2 (no el último).
    expect(findRightmost(arr, 2)).toBe(2);
  });

  // Caso 5: processExternalData duplica el valor recibido.
  it("processExternalData duplica el valor recibido", async () => {
    // Simulamos un fetcher que devuelve { value: 5 }.
    const fakeFetcher = async () => ({ value: 5 });
    // Esperamos que el resultado sea 10 (5 * 2).
    const result = await processExternalData(fakeFetcher);
    expect(result).toBe(10);
  });

  // Caso 6: processExternalData lanza error si el contrato es inválido.
  it("processExternalData lanza error si el contrato es inválido", async () => {
    // Simulamos un fetcher que devuelve un valor no numérico.
    const badFetcher = async () => ({ value: "no-numero" });
    // Esperamos que lance un error con el mensaje definido en la función.
    await expectAsync(processExternalData(badFetcher))
      .toBeRejectedWithError("Invalid contract: value must be a number");
  });

  // Caso 7: findIndex devuelve null si el arreglo está vacío.
  it("findIndex devuelve null si el arreglo está vacío", () => {
    // No hay elementos → no puede encontrar nada → null.
    expect(findIndex([], 5)).toBeNull();
  });

  // Caso 8: findAllIndices devuelve todos los índices de duplicados.
  it("findAllIndices devuelve todos los índices de duplicados", () => {
    const arr = [1, 2, 2, 2, 3];
    // El número 2 aparece en índices 1, 2 y 3.
    expect(findAllIndices(arr, 2)).toEqual([1, 2, 3]);
  });

  // Caso 9: findLeftmostIndex devuelve null si el target no existe.
  it("findLeftmostIndex devuelve null si el target no existe", () => {
    const arr = [1, 2, 3];
    // Buscamos el número 10, que no está → null.
    expect(findLeftmostIndex(arr, 10)).toBeNull();
  });

  // Caso 10: findRightmostIndex devuelve el último índice en duplicados.
  it("findRightmostIndex devuelve el último índice en duplicados", () => {
    const arr = [1, 2, 2, 2, 3];
    // El último 2 está en índice 3 → debe devolver 3.
    expect(findRightmostIndex(arr, 2)).toBe(3); // último índice correcto
  });

});
