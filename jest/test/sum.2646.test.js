const sum = require('../sum');

test('adds 58 + 52 to equal 110', () => {
  expect(sum(58, 52)).toBe(110);
});