const sum = require('../sum');

test('adds 65 + 34 to equal 99', () => {
  expect(sum(65, 34)).toBe(99);
});