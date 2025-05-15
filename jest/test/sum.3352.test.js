const sum = require('../sum');

test('adds 99 + 47 to equal 146', () => {
  expect(sum(99, 47)).toBe(146);
});