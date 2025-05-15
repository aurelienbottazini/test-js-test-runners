const sum = require('../sum');

test('adds 70 + 37 to equal 107', () => {
  expect(sum(70, 37)).toBe(107);
});