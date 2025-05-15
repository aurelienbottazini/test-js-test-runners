const sum = require('../sum');

test('adds 35 + 91 to equal 126', () => {
  expect(sum(35, 91)).toBe(126);
});