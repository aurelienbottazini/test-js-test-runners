const sum = require('../sum');

test('adds 23 + 34 to equal 57', () => {
  expect(sum(23, 34)).toBe(57);
});