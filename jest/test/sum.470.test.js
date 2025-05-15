const sum = require('../sum');

test('adds 50 + 56 to equal 106', () => {
  expect(sum(50, 56)).toBe(106);
});