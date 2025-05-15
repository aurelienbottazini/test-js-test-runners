const sum = require('../sum');

test('adds 36 + 9 to equal 45', () => {
  expect(sum(36, 9)).toBe(45);
});