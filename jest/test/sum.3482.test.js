const sum = require('../sum');

test('adds 67 + 59 to equal 126', () => {
  expect(sum(67, 59)).toBe(126);
});