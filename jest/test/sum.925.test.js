const sum = require('../sum');

test('adds 16 + 8 to equal 24', () => {
  expect(sum(16, 8)).toBe(24);
});