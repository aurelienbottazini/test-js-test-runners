const sum = require('../sum');

test('adds 35 + 47 to equal 82', () => {
  expect(sum(35, 47)).toBe(82);
});