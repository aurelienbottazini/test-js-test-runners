const sum = require('../sum');

test('adds 8 + 12 to equal 20', () => {
  expect(sum(8, 12)).toBe(20);
});