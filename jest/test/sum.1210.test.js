const sum = require('../sum');

test('adds 21 + 47 to equal 68', () => {
  expect(sum(21, 47)).toBe(68);
});