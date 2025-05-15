const sum = require('../sum');

test('adds 47 + 10 to equal 57', () => {
  expect(sum(47, 10)).toBe(57);
});