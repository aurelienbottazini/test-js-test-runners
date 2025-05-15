const sum = require('../sum');

test('adds 28 + 22 to equal 50', () => {
  expect(sum(28, 22)).toBe(50);
});