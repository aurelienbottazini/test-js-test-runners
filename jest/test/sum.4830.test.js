const sum = require('../sum');

test('adds 37 + 47 to equal 84', () => {
  expect(sum(37, 47)).toBe(84);
});