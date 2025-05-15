const sum = require('../sum');

test('adds 54 + 3 to equal 57', () => {
  expect(sum(54, 3)).toBe(57);
});