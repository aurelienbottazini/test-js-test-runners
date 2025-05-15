const sum = require('../sum');

test('adds 97 + 68 to equal 165', () => {
  expect(sum(97, 68)).toBe(165);
});