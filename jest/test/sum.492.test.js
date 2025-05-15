const sum = require('../sum');

test('adds 40 + 52 to equal 92', () => {
  expect(sum(40, 52)).toBe(92);
});