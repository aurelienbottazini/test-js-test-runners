const sum = require('../sum');

test('adds 80 + 47 to equal 127', () => {
  expect(sum(80, 47)).toBe(127);
});