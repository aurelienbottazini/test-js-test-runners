const sum = require('../sum');

test('adds 59 + 47 to equal 106', () => {
  expect(sum(59, 47)).toBe(106);
});