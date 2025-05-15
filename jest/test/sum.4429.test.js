const sum = require('../sum');

test('adds 52 + 5 to equal 57', () => {
  expect(sum(52, 5)).toBe(57);
});