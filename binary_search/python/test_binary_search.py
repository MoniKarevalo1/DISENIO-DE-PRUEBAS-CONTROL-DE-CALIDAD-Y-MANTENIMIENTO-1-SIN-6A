import unittest
from binary_search import find_index, contains, find, find_leftmost, find_rightmost, find_all

class TestBinarySearch(unittest.TestCase):
    def test_value_found(self):
        self.assertEqual(find_index([1, 3, 5, 7, 9], 5), 2)

    def test_value_not_found(self):
        self.assertIsNone(find_index([1, 3, 5, 7, 9], 4))

    def test_contains(self):
        self.assertTrue(contains([1, 3, 5, 7, 9], 7))
        self.assertFalse(contains([1, 3, 5, 7, 9], 8))

    def test_find(self):
        self.assertEqual(find([1, 3, 5, 7, 9], 7), 7)
        self.assertIsNone(find([1, 3, 5, 7, 9], 8))

    def test_duplicates(self):
        arr = ["apple", "banana", "banana", "cherry"]
        arr.sort()
        self.assertEqual(find_leftmost(arr, "banana"), "banana")
        self.assertEqual(find_rightmost(arr, "banana"), "banana")
        self.assertEqual(find_all(arr, "banana"), ["banana", "banana"])

if __name__ == "__main__":
    unittest.main()
