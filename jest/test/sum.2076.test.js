const sum = require('../sum');

test('adds 25 + 70 to equal 95', () => {
  expect(sum(25, 70)).toBe(95);
});