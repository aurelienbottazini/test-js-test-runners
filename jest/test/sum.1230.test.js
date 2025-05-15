const sum = require('../sum');

test('adds 5 + 63 to equal 68', () => {
  expect(sum(5, 63)).toBe(68);
});