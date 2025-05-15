const sum = require('../sum');

test('adds 27 + 47 to equal 74', () => {
  expect(sum(27, 47)).toBe(74);
});