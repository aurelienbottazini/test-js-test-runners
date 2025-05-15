const sum = require('../sum');

test('adds 42 + 74 to equal 116', () => {
  expect(sum(42, 74)).toBe(116);
});