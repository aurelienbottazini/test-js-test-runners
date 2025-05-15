const sum = require('../sum');

test('adds 10 + 34 to equal 44', () => {
  expect(sum(10, 34)).toBe(44);
});