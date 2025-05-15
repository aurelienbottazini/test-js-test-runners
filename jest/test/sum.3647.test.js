const sum = require('../sum');

test('adds 68 + 47 to equal 115', () => {
  expect(sum(68, 47)).toBe(115);
});