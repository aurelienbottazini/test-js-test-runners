const sum = require('../sum');

test('adds 41 + 66 to equal 107', () => {
  expect(sum(41, 66)).toBe(107);
});