from operator import attrgetter
from models import Person
from binary_search import (
    find_index, contains, find, find_leftmost, find_rightmost, find_all
)

# Ejemplo con strings y clave por longitud
fruits = ['orange', 'plum', 'watermelon', 'apple']
fruits.sort(key=len)

print("Fruits:", fruits)
print("Index of length=10:", find_index(fruits, 10, key=len))  # 3
print("Find length=10:", find(fruits, 10, key=len))            # 'watermelon'
print("Contains length=3:", contains(fruits, 3, key=len))      # False

# Ejemplo con Person y clave por apellido
people = [
    Person('Bob', 'Williams'),
    Person('John', 'Doe'),
    Person('Paul', 'Brown'),
    Person('Alice', 'Smith'),
    Person('John', 'Smith'),
]
by_surname = attrgetter('surname')
people.sort(key=by_surname)

print("\nPeople:", people)
print("Leftmost 'Smith':", find_leftmost(people, 'Smith', key=by_surname))
print("Rightmost 'Smith':", find_rightmost(people, 'Smith', key=by_surname))
print("All 'Smith':", find_all(people, 'Smith', key=by_surname))
