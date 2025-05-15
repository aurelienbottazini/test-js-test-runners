const sum = require('../sum');

test('adds 60 + 50 to equal 110', () => {
  expect(sum(60, 50)).toBe(110);
});