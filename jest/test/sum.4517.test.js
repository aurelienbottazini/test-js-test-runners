const sum4517 = require('../sum4517.js');

test('adds 12 + 98 to equal 110 + offset 0.6082730621213377', () => {
  expect(sum4517(12, 98)).toBe(110 + 0.6082730621213377);
});