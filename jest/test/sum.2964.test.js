const sum = require('../sum');

test('adds 30 + 75 to equal 105', () => {
  expect(sum(30, 75)).toBe(105);
});