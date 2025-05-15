const sum4804 = require('../sum4804.js');

test('adds 62 + 39 to equal 101 + offset 0.29717463636475483', () => {
  expect(sum4804(62, 39)).toBe(101 + 0.29717463636475483);
});