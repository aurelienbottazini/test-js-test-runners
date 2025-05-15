const sum = require('../sum');

test('adds 92 + 73 to equal 165', () => {
  expect(sum(92, 73)).toBe(165);
});