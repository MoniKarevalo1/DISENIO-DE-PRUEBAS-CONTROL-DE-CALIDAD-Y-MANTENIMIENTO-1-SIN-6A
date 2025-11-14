function identity(x) { return x; }

function findIndex(elements, value, key = identity) {
  let left = 0, right = elements.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleElement = key(elements[middle]);
    if (middleElement === value) return middle;
    if (middleElement < value) left = middle + 1;
    else right = middle - 1;
  }
  return null;
}

function contains(elements, value, key = identity) {
  return findIndex(elements, value, key) !== null;
}

function find(elements, value, key = identity) {
  const idx = findIndex(elements, value, key);
  return idx === null ? null : elements[idx];
}

function findLeftmostIndex(elements, value, key = identity) {
  let index = findIndex(elements, value, key);
  if (index !== null) {
    while (index >= 0 && key(elements[index]) === value) index--;
    index++;
  }
  return index;
}

function findRightmostIndex(elements, value, key = identity) {
  let index = findIndex(elements, value, key);
  if (index !== null) {
    while (index < elements.length && key(elements[index]) === value) index++;
    index--;
  }
  return index;
}

function findAllIndices(elements, value, key = identity) {
  const left = findLeftmostIndex(elements, value, key);
  const right = findRightmostIndex(elements, value, key);
  if (left === null || right === null) return new Set();
  return new Set(Array.from({ length: right - left + 1 }, (_, i) => left + i));
}

function findLeftmost(elements, value, key = identity) {
  const idx = findLeftmostIndex(elements, value, key);
  return idx === null ? null : elements[idx];
}

function findRightmost(elements, value, key = identity) {
  const idx = findRightmostIndex(elements, value, key);
  return idx === null ? null : elements[idx];
}

function findAll(elements, value, key = identity) {
  const indices = findAllIndices(elements, value, key);
  return new Set(Array.from(indices).map(i => elements[i]));
}

module.exports = {
  identity,
  findIndex,
  contains,
  find,
  findLeftmostIndex,
  findRightmostIndex,
  findAllIndices,
  findLeftmost,
  findRightmost,
  findAll,
};
