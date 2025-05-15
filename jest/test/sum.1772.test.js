const sum = require('../sum');

test('adds 74 + 42 to equal 116', () => {
  expect(sum(74, 42)).toBe(116);
});