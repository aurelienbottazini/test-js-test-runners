const sum4956 = require('../sum4956.js');

test('adds 35 + 61 to equal 96 + offset 0.8861649199563184', () => {
  expect(sum4956(35, 61)).toBe(96 + 0.8861649199563184);
});