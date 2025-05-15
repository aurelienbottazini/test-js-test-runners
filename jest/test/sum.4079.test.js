const sum = require('../sum');

test('adds 51 + 20 to equal 71', () => {
  expect(sum(51, 20)).toBe(71);
});