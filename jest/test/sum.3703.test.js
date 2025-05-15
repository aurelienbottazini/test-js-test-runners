const sum = require('../sum');

test('adds 80 + 85 to equal 165', () => {
  expect(sum(80, 85)).toBe(165);
});