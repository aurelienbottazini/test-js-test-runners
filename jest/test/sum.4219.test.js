const sum = require('../sum');

test('adds 87 + 78 to equal 165', () => {
  expect(sum(87, 78)).toBe(165);
});