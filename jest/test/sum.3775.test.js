const sum = require('../sum');

test('adds 64 + 67 to equal 131', () => {
  expect(sum(64, 67)).toBe(131);
});