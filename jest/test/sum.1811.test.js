const sum = require('../sum');

test('adds 28 + 20 to equal 48', () => {
  expect(sum(28, 20)).toBe(48);
});