const sum = require('../sum');

test('adds 81 + 26 to equal 107', () => {
  expect(sum(81, 26)).toBe(107);
});