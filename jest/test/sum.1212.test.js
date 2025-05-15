const sum = require('../sum');

test('adds 54 + 47 to equal 101', () => {
  expect(sum(54, 47)).toBe(101);
});