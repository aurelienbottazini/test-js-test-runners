const sum = require('../sum');

test('adds 66 + 44 to equal 110', () => {
  expect(sum(66, 44)).toBe(110);
});