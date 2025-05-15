const sum = require('../sum');

test('adds 26 + 47 to equal 73', () => {
  expect(sum(26, 47)).toBe(73);
});