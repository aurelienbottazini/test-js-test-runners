const sum = require('../sum');

test('adds 71 + 66 to equal 137', () => {
  expect(sum(71, 66)).toBe(137);
});