const sum = require('../sum');

test('adds 55 + 55 to equal 110', () => {
  expect(sum(55, 55)).toBe(110);
});