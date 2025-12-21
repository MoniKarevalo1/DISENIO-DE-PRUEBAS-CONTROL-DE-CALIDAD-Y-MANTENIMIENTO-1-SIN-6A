// Jasmine prueba findIndex: matriz vacía, elemento único, duplicados, no encontrado
const { findIndex, contains, find,
  findLeftmostIndex, findRightmostIndex,
  findAllIndices, findLeftmost, findRightmost, findAll,
  processExternalData 
} = require("../../binary_search/js/binarySearchLogic");                   

const externalModule = require("../../binary_search/js/externalModule");
const logic = require("../../binary_search/js/binarySearchLogic");     

// Suite de pruebas con Jasmine
describe("Binary Search (AI Generated - Básico)", () => {
  // Caso: valor existente  
  it("finds index of existing value", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 7)).toBe(3);
  });                                       
    // Caso: valor no encontrado                
    it("returns null when value not found", () => {         
    const arr = [1, 3, 5, 7, 9];
    expect(findIndex(arr, 4)).toBeNull();   
    });         
    // Caso: contains               
    it("contains works correctly", () => {              
    const arr = [1, 3, 5, 7, 9];                    
    expect(contains(arr, 5)).toBeTrue();    
    expect(contains(arr, 6)).toBeFalse();       
    });
    // Caso: find   
    it("find returns the element or null", () => {      
    const arr = [1, 3, 5, 7, 9];
    expect(find(arr, 5)).toBe(5);        
    expect(find(arr, 6)).toBeNull();     
    }     );
});                          

describe("Binary Search (AI Generated - Mocking)", () => {                                                
    it("simula el módulo externo con espía personalizado", async () => {
  spyOn(externalModule, "fetchData").and.callFake(() => {
    return Promise.resolve({ value: 10 });
  });

  // await dentro de función asyncrónica de prueba
  const result = await processExternalData(externalModule.fetchData);

  expect(externalModule.fetchData).toHaveBeenCalled();
  expect(result).toBe(20);
});
          
});