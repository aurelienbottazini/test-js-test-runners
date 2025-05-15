const sum = require('../sum');

test('adds 56 + 34 to equal 90', () => {
  expect(sum(56, 34)).toBe(90);
});