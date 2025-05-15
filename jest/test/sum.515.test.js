const sum = require('../sum');

test('adds 74 + 33 to equal 107', () => {
  expect(sum(74, 33)).toBe(107);
});