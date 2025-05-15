const sum = require('../sum');

test('adds 20 + 5 to equal 25', () => {
  expect(sum(20, 5)).toBe(25);
});