const sum = require('../sum');

test('adds 75 + 90 to equal 165', () => {
  expect(sum(75, 90)).toBe(165);
});