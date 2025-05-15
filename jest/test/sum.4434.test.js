const sum = require('../sum');

test('adds 65 + 10 to equal 75', () => {
  expect(sum(65, 10)).toBe(75);
});