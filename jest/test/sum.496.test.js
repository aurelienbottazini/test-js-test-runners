const sum = require('../sum');

test('adds 68 + 39 to equal 107', () => {
  expect(sum(68, 39)).toBe(107);
});