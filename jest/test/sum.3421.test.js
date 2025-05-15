const sum = require('../sum');

test('adds 36 + 91 to equal 127', () => {
  expect(sum(36, 91)).toBe(127);
});