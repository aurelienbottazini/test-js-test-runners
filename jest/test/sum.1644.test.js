const sum = require('../sum');

test('adds 76 + 34 to equal 110', () => {
  expect(sum(76, 34)).toBe(110);
});