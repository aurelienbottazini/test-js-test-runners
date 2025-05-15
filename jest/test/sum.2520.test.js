const sum = require('../sum');

test('adds 68 + 48 to equal 116', () => {
  expect(sum(68, 48)).toBe(116);
});