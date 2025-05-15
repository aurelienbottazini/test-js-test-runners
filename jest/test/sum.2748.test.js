const sum = require('../sum');

test('adds 45 + 86 to equal 131', () => {
  expect(sum(45, 86)).toBe(131);
});