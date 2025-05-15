const sum = require('../sum');

test('adds 74 + 52 to equal 126', () => {
  expect(sum(74, 52)).toBe(126);
});