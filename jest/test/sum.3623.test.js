const sum = require('../sum');

test('adds 2 + 48 to equal 50', () => {
  expect(sum(2, 48)).toBe(50);
});