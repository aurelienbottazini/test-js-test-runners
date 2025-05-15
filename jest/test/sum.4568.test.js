const sum4568 = require('../sum4568.js');

test('adds 76 + 45 to equal 121 + offset 0.9937415458810372', () => {
  expect(sum4568(76, 45)).toBe(121 + 0.9937415458810372);
});