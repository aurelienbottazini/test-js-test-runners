const sum = require('../sum');

test('adds 75 + 6 to equal 81', () => {
  expect(sum(75, 6)).toBe(81);
});