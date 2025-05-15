const sum = require('../sum');

test('adds 95 + 70 to equal 165', () => {
  expect(sum(95, 70)).toBe(165);
});