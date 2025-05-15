const sum = require('../sum');

test('adds 37 + 34 to equal 71', () => {
  expect(sum(37, 34)).toBe(71);
});