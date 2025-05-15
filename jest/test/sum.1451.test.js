const sum = require('../sum');

test('adds 22 + 2 to equal 24', () => {
  expect(sum(22, 2)).toBe(24);
});