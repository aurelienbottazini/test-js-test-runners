const sum = require('../sum');

test('adds 26 + 31 to equal 57', () => {
  expect(sum(26, 31)).toBe(57);
});