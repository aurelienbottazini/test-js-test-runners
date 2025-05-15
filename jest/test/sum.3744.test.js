const sum = require('../sum');

test('adds 87 + 44 to equal 131', () => {
  expect(sum(87, 44)).toBe(131);
});