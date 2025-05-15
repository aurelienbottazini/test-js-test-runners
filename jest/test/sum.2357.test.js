const sum = require('../sum');

test('adds 55 + 47 to equal 102', () => {
  expect(sum(55, 47)).toBe(102);
});