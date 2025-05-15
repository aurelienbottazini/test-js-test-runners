const sum = require('../sum');

test('adds 73 + 34 to equal 107', () => {
  expect(sum(73, 34)).toBe(107);
});