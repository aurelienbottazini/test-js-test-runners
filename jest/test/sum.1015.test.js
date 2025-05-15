const sum = require('../sum');

test('adds 34 + 25 to equal 59', () => {
  expect(sum(34, 25)).toBe(59);
});