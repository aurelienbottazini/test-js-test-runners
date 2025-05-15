const sum = require('../sum');

test('adds 71 + 94 to equal 165', () => {
  expect(sum(71, 94)).toBe(165);
});