const sum = require('../sum');

test('adds 88 + 77 to equal 165', () => {
  expect(sum(88, 77)).toBe(165);
});