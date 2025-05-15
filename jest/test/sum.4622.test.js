const sum = require('../sum');

test('adds 41 + 34 to equal 75', () => {
  expect(sum(41, 34)).toBe(75);
});