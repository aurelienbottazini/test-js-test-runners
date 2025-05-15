const sum = require('../sum');

test('adds 71 + 32 to equal 103', () => {
  expect(sum(71, 32)).toBe(103);
});