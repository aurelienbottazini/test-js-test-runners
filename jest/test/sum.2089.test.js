const sum = require('../sum');

test('adds 7 + 50 to equal 57', () => {
  expect(sum(7, 50)).toBe(57);
});