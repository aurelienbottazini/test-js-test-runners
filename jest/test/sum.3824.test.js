const sum = require('../sum');

test('adds 48 + 47 to equal 95', () => {
  expect(sum(48, 47)).toBe(95);
});