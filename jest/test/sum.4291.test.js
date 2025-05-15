const sum = require('../sum');

test('adds 68 + 97 to equal 165', () => {
  expect(sum(68, 97)).toBe(165);
});