const sum = require('../sum');

test('adds 25 + 34 to equal 59', () => {
  expect(sum(25, 34)).toBe(59);
});