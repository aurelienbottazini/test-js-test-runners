const sum = require('../sum');

test('adds 19 + 38 to equal 57', () => {
  expect(sum(19, 38)).toBe(57);
});