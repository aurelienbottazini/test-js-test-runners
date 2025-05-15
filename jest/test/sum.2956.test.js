const sum = require('../sum');

test('adds 15 + 9 to equal 24', () => {
  expect(sum(15, 9)).toBe(24);
});