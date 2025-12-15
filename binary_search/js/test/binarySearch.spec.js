const { expect } = require('chai');
const {
  findIndex, contains, find,
  findLeftmostIndex, findRightmostIndex,
  findAllIndices, findLeftmost, findRightmost, findAll
} = require('../binarySearch');

describe('Binary Search (JS)', () => {
  describe('search by literal value', () => {
    it('finds index of existing value', () => {
      const arr = [1, 3, 5, 7, 9];
      expect(findIndex(arr, 7)).to.equal(3);
    });

    it('returns null when value not found', () => {
      const arr = [1, 3, 5, 7, 9];
      expect(findIndex(arr, 4)).to.equal(null);
    });

    it('contains works correctly', () => {
      const arr = [1, 3, 5, 7, 9];
      expect(contains(arr, 5)).to.be.true;
      expect(contains(arr, 6)).to.be.false;
    });

    it('find returns the element or null', () => {
      const arr = [1, 3, 5, 7, 9];
      expect(find(arr, 5)).to.equal(5);
      expect(find(arr, 6)).to.equal(null);
    });
  });

  describe('search using key function', () => {
    it('searches strings by length', () => {
      const fruits = ['orange', 'plum', 'watermelon', 'apple'].sort((a, b) => a.length - b.length);
      expect(findIndex(fruits, 10, x => x.length)).to.equal(3);
      expect(find(fruits, 10, x => x.length)).to.equal('watermelon');
      expect(contains(fruits, 3, x => x.length)).to.equal(false);
    });

    it('handles duplicates with leftmost/rightmost', () => {
      const people = [
        { name: 'Bob', surname: 'Williams' },
        { name: 'John', surname: 'Doe' },
        { name: 'Paul', surname: 'Brown' },
        { name: 'Alice', surname: 'Smith' },
        { name: 'John', surname: 'Smith' },
      ].sort((a, b) => a.surname.localeCompare(b.surname));

      const bySurname = p => p.surname;

      const leftIdx = findLeftmostIndex(people, 'Smith', bySurname);
      const rightIdx = findRightmostIndex(people, 'Smith', bySurname);

      expect(people[leftIdx]).to.deep.equal({ name: 'Alice', surname: 'Smith' });
      expect(people[rightIdx]).to.deep.equal({ name: 'John', surname: 'Smith' });

      const indices = findAllIndices(people, 'Smith', bySurname);
      expect(Array.from(indices)).to.deep.equal([3, 4]);

      const allPeople = findAll(people, 'Smith', bySurname);
      expect(Array.from(allPeople)).to.have.deep.members([
        { name: 'Alice', surname: 'Smith' },
        { name: 'John', surname: 'Smith' },
      ]);
    });
  });

  describe('edge cases', () => {
    it('empty array', () => {
      expect(findIndex([], 1)).to.equal(null);
      expect(find([], 1)).to.equal(null);
      expect(contains([], 1)).to.equal(false);
    });

    it('single element', () => {
      expect(findIndex([5], 5)).to.equal(0);
      expect(findIndex([5], 6)).to.equal(null); // Prueba de integración con GitHub Actions
    });
  });
});
