import unittest
from binary_search.python.binary_search import (
    find_index, contains, find, find_leftmost_index,
    find_rightmost_index, find_all
)

class TestBinarySearchImproved(unittest.TestCase):

    def test_value_found(self):
        self.assertEqual(find_index([1, 2, 3, 4], 4), 3)

    def test_value_not_found(self):
        self.assertIsNone(find_index([1, 2, 3], 0))
        self.assertIsNone(find_index([1, 2, 3], 5))
        self.assertIsNone(find_leftmost_index([1, 2, 3], 9))
        self.assertIsNone(find_rightmost_index([1, 2, 3], 9))

    def test_contains(self):
        self.assertTrue(contains([1, 2, 3], 1))
        self.assertFalse(contains([1, 2, 3], 9))

    def test_find(self):
        self.assertEqual(find([10, 20, 30], 30), 30)
        self.assertIsNone(find([10, 20, 30], 100))

    def test_all_duplicates_left_right_indices(self):
        data = [5, 5, 5, 5, 5]
        self.assertEqual(find_leftmost_index(data, 5), 0)
        self.assertEqual(find_rightmost_index(data, 5), 4)

    def test_branch_else_condition(self):
        self.assertIsNone(find_index([10, 20, 30], 5))

    def test_find_all_not_found(self):
        self.assertEqual(find_all([1, 2, 3], 9), [])

    def test_all_equal(self):
        data = [7, 7, 7, 7]
        self.assertEqual(find_all(data, 7), [7, 7, 7, 7])

    def test_key_usage_objects(self):
        class Item:
            def __init__(self, name): self.name = name
        items = [Item("a"), Item("b"), Item("c")]
        result = find(items, "b", key=lambda x: x.name)
        self.assertEqual(result.name, "b")

    def test_empty_list(self):
        self.assertIsNone(find([], 1))

if __name__ == "__main__":
    unittest.main()
