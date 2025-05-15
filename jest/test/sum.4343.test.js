const sum4343 = require('../sum4343.js');

test('adds 90 + 91 to equal 181 + 0.5849133230933623', () => {
  expect(sum4343(90, 91)).toBe(181 + 0.5849133230933623);
});