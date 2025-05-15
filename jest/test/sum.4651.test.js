const sum = require('../sum');

test('adds 40 + 67 to equal 107', () => {
  expect(sum(40, 67)).toBe(107);
});