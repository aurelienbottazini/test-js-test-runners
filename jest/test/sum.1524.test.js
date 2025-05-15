const sum = require('../sum');

test('adds 84 + 81 to equal 165', () => {
  expect(sum(84, 81)).toBe(165);
});