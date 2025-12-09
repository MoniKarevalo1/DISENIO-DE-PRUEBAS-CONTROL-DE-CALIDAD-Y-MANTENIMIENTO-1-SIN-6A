import unittest
from binary_search.python.binary_search import *

class TestBinarySearchInitial(unittest.TestCase):
    
    def setUp(self):
        self.data = [1, 2, 2, 2, 3]
        self.empty = []
        self.all_equal = [7, 7, 7, 7]

    def tearDown(self):
        # Aquí podrías limpiar estructuras si fuera necesario
        pass


    def test_value_found(self):
        self.assertEqual(find_index([1, 2, 3, 4], 3), 2)

    def test_value_not_found(self):
        self.assertIsNone(find_index([1, 2, 3], 5))
        # misma prueba, pero dispara otra rama del algoritmo
        self.assertIsNone(find_index([1, 2, 3], -1))

    def test_contains(self):
        self.assertTrue(contains([1, 2, 3], 2))
        self.assertFalse(contains([1, 2, 3], 9))

    def test_find(self):
        self.assertEqual(find([10, 20, 30], 20), 20)
        self.assertIsNone(find([10, 20, 30], 40))

    def test_duplicates(self):
        data = [1, 2, 2, 2, 3]
        self.assertEqual(find_leftmost_index(data, 2), 1)
        self.assertEqual(find_rightmost_index(data, 2), 3)

    def test_basic_search(self):
        self.assertEqual(find_index([5, 10, 15], 10), 1)

    def test_value_not_found_extra(self):
        self.assertIsNone(find_index([10, 20, 30], 5))
        self.assertIsNone(find_index([10, 20, 30], 35))

    def test_empty_list(self):
        self.assertIsNone(find_index([], 10))

    def test_extremes(self):
        self.assertEqual(find_index([1, 2, 3], 1), 0)
        self.assertEqual(find_index([1, 2, 3], 3), 2)

    def test_all_equal(self):
        data = [7, 7, 7, 7]
        self.assertEqual(find_leftmost_index(data, 7), 0)
        self.assertEqual(find_rightmost_index(data, 7), 3)
        self.assertEqual(find_all(data, 7), [7, 7, 7, 7])   # ← cubre línea 63

if __name__ == "__main__":
    unittest.main()
