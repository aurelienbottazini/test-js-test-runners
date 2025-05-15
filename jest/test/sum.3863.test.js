const sum = require('../sum');

test('adds 85 + 80 to equal 165', () => {
  expect(sum(85, 80)).toBe(165);
});