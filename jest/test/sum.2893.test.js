const sum = require('../sum');

test('adds 45 + 5 to equal 50', () => {
  expect(sum(45, 5)).toBe(50);
});