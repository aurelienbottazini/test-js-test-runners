const sum = require('../sum');

test('adds 57 + 0 to equal 57', () => {
  expect(sum(57, 0)).toBe(57);
});