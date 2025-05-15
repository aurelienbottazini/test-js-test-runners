const sum = require('../sum');

test('adds 21 + 95 to equal 116', () => {
  expect(sum(21, 95)).toBe(116);
});