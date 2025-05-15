const sum = require('../sum');

test('adds 8 + 40 to equal 48', () => {
  expect(sum(8, 40)).toBe(48);
});