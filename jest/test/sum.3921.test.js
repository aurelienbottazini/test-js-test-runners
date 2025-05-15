const sum = require('../sum');

test('adds 67 + 98 to equal 165', () => {
  expect(sum(67, 98)).toBe(165);
});