const sum = require('../sum');

test('adds 76 + 40 to equal 116', () => {
  expect(sum(76, 40)).toBe(116);
});