import unittest
from binary_search import find, find_all

class TestBinarySearchImproved(unittest.TestCase):
    def test_find(self):
        self.assertEqual(find([10, 20, 30], 20), 20)
        self.assertIsNone(find([10, 20, 30], 40))

    def test_find_all(self):
        data = [5, 5, 5]
        self.assertEqual(find_all(data, 5), [5, 5, 5])
        self.assertEqual(find_all(data, 9), [])

if __name__ == "__main__":
    unittest.main()
