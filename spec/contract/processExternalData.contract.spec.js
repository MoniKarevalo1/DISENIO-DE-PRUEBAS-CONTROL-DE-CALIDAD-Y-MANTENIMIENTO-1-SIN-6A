// Importamos la función processExternalData
const { processExternalData } = require("../../binary_search/js/binarySearchLogic");

describe("Contract testing: processExternalData", () => {
  // Contrato: si el fetcher devuelve { value: number }, retorna el doble
  it("returns doubled value when contract is valid", async () => {
    const fetcher = async () => ({ value: 10 }); // simulamos proveedor válido
    const result = await processExternalData(fetcher);
    expect(result).toBe(20); // 10 * 2
  });

  // Contrato: si falta la propiedad value, debe lanzar error
  it("throws error when contract is violated (value missing)", async () => {
    const badFetcher = async () => ({});
    await expectAsync(processExternalData(badFetcher))
      .toBeRejectedWithError("Invalid contract");
  });

  // Contrato: si value no es número, debe lanzar error
  it("throws error when contract is violated (value not a number)", async () => {
    const badFetcher = async () => ({ value: "abc" });
    await expectAsync(processExternalData(badFetcher))
      .toBeRejectedWithError("Invalid contract");
  });
});
