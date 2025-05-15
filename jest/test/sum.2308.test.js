const sum = require('../sum');

test('adds 27 + 80 to equal 107', () => {
  expect(sum(27, 80)).toBe(107);
});