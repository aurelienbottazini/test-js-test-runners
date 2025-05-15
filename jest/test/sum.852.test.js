const sum = require('../sum');

test('adds 30 + 47 to equal 77', () => {
  expect(sum(30, 47)).toBe(77);
});