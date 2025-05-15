const sum = require('../sum');

test('adds 74 + 1 to equal 75', () => {
  expect(sum(74, 1)).toBe(75);
});