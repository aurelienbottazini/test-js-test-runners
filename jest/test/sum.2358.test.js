const sum = require('../sum');

test('adds 75 + 75 to equal 150', () => {
  expect(sum(75, 75)).toBe(150);
});