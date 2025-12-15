const externalModule = require("./externalModule");

async function processExternalData() {
  const data = await externalModule.fetchData();
  return data.value * 2; // ✅ aquí multiplicamos para que el test espere 20
}

// Función básica de búsqueda binaria
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

function contains(arr, target, keyFn = x => x) {
  return findIndex(arr, target, keyFn) !== null;
}

function find(arr, target, keyFn = x => x) {
  const idx = findIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

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

function findLeftmost(arr, target, keyFn = x => x) {
  const idx = findLeftmostIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

function findRightmost(arr, target, keyFn = x => x) {
  const idx = findRightmostIndex(arr, target, keyFn);
  return idx !== null ? arr[idx] : null;
}

function findAll(arr, target, keyFn = x => x) {
  const indices = findAllIndices(arr, target, keyFn);
  return indices.map(i => arr[i]);
}

// Exportamos todas las funciones
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
