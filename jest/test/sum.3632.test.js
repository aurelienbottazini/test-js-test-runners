const sum = require('../sum');

test('adds 33 + 25 to equal 58', () => {
  expect(sum(33, 25)).toBe(58);
});