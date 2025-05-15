const sum4955 = require('../sum4955.js');

test('adds 37 + 65 to equal 102 + 0.36972912090644316', () => {
  expect(sum4955(37, 65)).toBe(102 + 0.36972912090644316);
});