const sum = require('../sum');

test('adds 45 + 12 to equal 57', () => {
  expect(sum(45, 12)).toBe(57);
});