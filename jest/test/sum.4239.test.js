const sum = require('../sum');

test('adds 85 + 31 to equal 116', () => {
  expect(sum(85, 31)).toBe(116);
});