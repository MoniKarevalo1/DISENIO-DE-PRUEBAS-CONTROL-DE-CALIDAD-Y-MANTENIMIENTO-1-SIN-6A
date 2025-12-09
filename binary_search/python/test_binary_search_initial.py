from binary_search import (
    find_index, contains, find, find_leftmost_index,
    find_rightmost_index, find_all_indices, find_leftmost,
    find_rightmost, find_all
)

def test_value_found():
    assert find_index([1, 2, 3, 4], 3) == 2

def test_value_not_found():
    assert find_index([1, 2, 3], 5) is None

def test_contains():
    assert contains([1, 2, 3], 2) is True
    assert contains([1, 2, 3], 5) is False

def test_find():
    assert find([10, 20, 30], 20) == 20
    assert find([10, 20, 30], 40) is None

def test_duplicates():
    data = [1, 2, 2, 2, 3]
    assert find_leftmost_index(data, 2) == 1
    assert find_rightmost_index(data, 2) == 3

def test_basic_search():
    assert find_index([5, 10, 15], 10) == 1

def test_value_not_found_extra():
    assert find_index([10, 20, 30], 5) is None
    assert find_index([10, 20, 30], 35) is None

def test_empty_list():
    assert find_index([], 10) is None

def test_extremes():
    assert find_index([1, 2, 3], 1) == 0
    assert find_index([1, 2, 3], 3) == 2

def test_all_equal():
    data = [7, 7, 7, 7]
    assert find_leftmost_index(data, 7) == 0
    assert find_rightmost_index(data, 7) == 3
