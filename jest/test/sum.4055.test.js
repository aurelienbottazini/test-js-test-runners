const sum = require('../sum');

test('adds 2 + 22 to equal 24', () => {
  expect(sum(2, 22)).toBe(24);
});