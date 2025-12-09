from binary_search import (
    find_index, contains, find, find_leftmost_index,
    find_rightmost_index, find_all_indices, find_leftmost,
    find_rightmost, find_all
)

def test_value_found():
    assert find_index([1, 2, 3, 4], 4) == 3

def test_value_not_found():
    assert find_index([1, 2, 3], 0) is None
    assert find_index([1, 2, 3], 5) is None

def test_contains():
    assert contains([1, 2, 3], 1)
    assert not contains([1, 2, 3], 9)

def test_find():
    assert find([10, 20, 30], 30) == 30
    assert find([10, 20, 30], 100) is None

def test_all_duplicates_left_right_indices():
    data = [5, 5, 5, 5, 5]
    assert find_leftmost_index(data, 5) == 0
    assert find_rightmost_index(data, 5) == 4

def test_branch_else_condition():
    assert find_index([10, 20, 30], 5) is None

def test_find_all_not_found():
    assert find_all([1, 2, 3], 9) == []

def test_all_equal():
    data = [7, 7, 7, 7]
    assert find_all(data, 7) == [7, 7, 7, 7]

def test_key_usage_objects():
    class Item:
        def __init__(self, name): self.name = name
    items = [Item("a"), Item("b"), Item("c")]
    result = find(items, "b", key=lambda x: x.name)
    assert result.name == "b"

def test_empty_list():
    assert find([], 1) is None
