const sum = require('../sum');

test('adds 29 + 52 to equal 81', () => {
  expect(sum(29, 52)).toBe(81);
});