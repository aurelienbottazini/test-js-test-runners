const sum = require('../sum');

test('adds 89 + 76 to equal 165', () => {
  expect(sum(89, 76)).toBe(165);
});