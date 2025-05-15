const sum4353 = require('../sum4353.js');

test('adds 99 + 82 to equal 181 + 0.9078970870642754', () => {
  expect(sum4353(99, 82)).toBe(181 + 0.9078970870642754);
});