const sum = require('../sum');

test('adds 54 + 56 to equal 110', () => {
  expect(sum(54, 56)).toBe(110);
});