const sum = require('../sum');

test('adds 98 + 28 to equal 126', () => {
  expect(sum(98, 28)).toBe(126);
});