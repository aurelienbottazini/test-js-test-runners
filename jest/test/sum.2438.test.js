const sum = require('../sum');

test('adds 41 + 69 to equal 110', () => {
  expect(sum(41, 69)).toBe(110);
});