from dataclasses import dataclass

@dataclass(order=True)
class Person:
    name: str
    surname: str
