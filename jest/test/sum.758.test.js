const sum = require('../sum');

test('adds 80 + 27 to equal 107', () => {
  expect(sum(80, 27)).toBe(107);
});