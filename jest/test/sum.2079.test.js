const sum = require('../sum');

test('adds 59 + 31 to equal 90', () => {
  expect(sum(59, 31)).toBe(90);
});