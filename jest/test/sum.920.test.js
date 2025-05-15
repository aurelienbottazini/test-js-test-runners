const sum = require('../sum');

test('adds 3 + 47 to equal 50', () => {
  expect(sum(3, 47)).toBe(50);
});