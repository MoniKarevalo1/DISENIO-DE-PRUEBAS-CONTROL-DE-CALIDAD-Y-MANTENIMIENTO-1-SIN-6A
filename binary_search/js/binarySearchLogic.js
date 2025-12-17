// Importamos el módulo externo simulado
const externalModule = require("./externalModule");

/**
 * Función que procesa datos externos.
 * Recibe como argumento un "fetcher" (función que retorna una promesa con { value: number }).
 * Valida el contrato y aplica una regla de negocio: duplicar el valor recibido.
 */
async function processExternalData(fetcher) {
  const fn = fetcher || externalModule.fetchData; // usa el espía si existe
  const data = await fn();
  if (!data || typeof data.value !== "number") {
    throw new Error("Invalid contract: value must be a number");
  }
  return data.value * 2;
}



/**
 * Función básica de búsqueda binaria.
 * Permite opcionalmente aplicar una función de transformación (keyFn) sobre los elementos.
 */
function findIndex(arr, target, keyFn = x => x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = keyFn(arr[mid]);
    if (value === target) return mid;
    if (value < target) left = mid + 1;
    else right = mid - 1;
  }
  return null;
}

/**
 * Verifica si un valor existe en el arreglo.
 */
function contains(arr, target, keyFn = x => x) {
  return findIndex(arr, target, keyFn) !== null;
}

/**
 * Devuelve el elemento encontrado o null si no existe.
 */
function find(arr, target, keyFn = x => x) {
  const idx = findIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

/**
 * Busca el índice más a la izquierda de un valor repetido.
 */
function findLeftmostIndex(arr, target, keyFn = x => x) {
  let left = 0;
  let right = arr.length - 1;
  let result = null;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = keyFn(arr[mid]);
    if (value === target) {
      result = mid;
      right = mid - 1; // sigue buscando a la izquierda
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

/**
 * Busca el índice más a la derecha de un valor repetido.
 */
function findRightmostIndex(arr, target, keyFn = x => x) {
  let left = 0;
  let right = arr.length - 1;
  let result = null;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = keyFn(arr[mid]);
    if (value === target) {
      result = mid;
      left = mid + 1; // sigue buscando a la derecha
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

/**
 * Devuelve todos los índices donde aparece el valor buscado.
 */
function findAllIndices(arr, target, keyFn = x => x) {
  const indices = [];
  let idx = findLeftmostIndex(arr, target, keyFn);
  if (idx === null) return indices;
  let rightIdx = findRightmostIndex(arr, target, keyFn);
  for (let i = idx; i <= rightIdx; i++) {
    indices.push(i);
  }
  return indices;
}

/**
 * Devuelve el elemento más a la izquierda que coincide con el target.
 */
function findLeftmost(arr, target, keyFn = x => x) {
  const idx = findLeftmostIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

/**
 * Devuelve el elemento más a la derecha que coincide con el target.
 */
function findRightmost(arr, target, keyFn = x => x) {
  const idx = findRightmostIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

/**
 * Devuelve todos los elementos que coinciden con el target.
 */
function findAll(arr, target, keyFn = x => x) {
  const indices = findAllIndices(arr, target, keyFn);
  return indices.map(i => arr[i]);
}

// Exportamos todas las funciones para que puedan ser usadas en las pruebas
module.exports = {
  findIndex,
  contains,
  find,
  findLeftmostIndex,
  findRightmostIndex,
  findAllIndices,
  findLeftmost,
  findRightmost,
  findAll,
  processExternalData
};
