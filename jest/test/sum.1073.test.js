const sum = require('../sum');

test('adds 25 + 75 to equal 100', () => {
  expect(sum(25, 75)).toBe(100);
});