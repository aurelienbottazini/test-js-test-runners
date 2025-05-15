const sum = require('../sum');

test('adds 68 + 27 to equal 95', () => {
  expect(sum(68, 27)).toBe(95);
});