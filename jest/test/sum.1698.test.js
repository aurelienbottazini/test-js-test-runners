const sum = require('../sum');

test('adds 5 + 75 to equal 80', () => {
  expect(sum(5, 75)).toBe(80);
});