const sum = require('../sum');

test('adds 5 + 52 to equal 57', () => {
  expect(sum(5, 52)).toBe(57);
});