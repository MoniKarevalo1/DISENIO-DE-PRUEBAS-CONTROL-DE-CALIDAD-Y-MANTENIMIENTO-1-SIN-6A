from operator import attrgetter
from typing import Any, Callable, Iterable, Optional, Set

# Utilidad básica
def identity(x):
    return x

# Función principal de búsqueda
def find_index(elements: Iterable[Any], value: Any, key: Callable = identity) -> Optional[int]:
    left, right = 0, len(elements) - 1
    while left <= right:
        middle = (left + right) // 2
        middle_element = key(elements[middle])
        if middle_element == value:
            return middle
        elif middle_element < value:
            left = middle + 1
        else:
            right = middle - 1
    return None

# Funciones auxiliares
def contains(elements, value, key: Callable = identity) -> bool:
    return find_index(elements, value, key) is not None

def find(elements, value, key: Callable = identity):
    idx = find_index(elements, value, key)
    return None if idx is None else elements[idx]

def find_leftmost_index(elements, value, key: Callable = identity) -> Optional[int]:
    index = find_index(elements, value, key)
    if index is not None:
        while index >= 0 and key(elements[index]) == value:
            index -= 1
        index += 1
    return index

def find_leftmost(elements, value, key: Callable = identity):
    idx = find_leftmost_index(elements, value, key)
    return None if idx is None else elements[idx]

def find_rightmost(elements, value, key: Callable = identity):
    idx = find_rightmost_index(elements, value, key)
    return None if idx is None else elements[idx]

def find_all_indices(elements, value, key: Callable = identity) -> Set[int]:
    left = find_leftmost_index(elements, value, key)
    right = find_rightmost_index(elements, value, key)
    if left is None or right is None:
        return set()
    return set(range(left, right + 1))

def find_all(elements, value, key=identity):
    return [elements[i] for i in find_all_indices(elements, value, key)]

def find_rightmost_index(elements, value, key: Callable = identity) -> Optional[int]:
    index = find_index(elements, value, key)
    if index is not None:
        while index < len(elements) and key(elements[index]) == value:
            index += 1
        index -= 1
    return index