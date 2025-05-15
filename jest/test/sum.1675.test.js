const sum = require('../sum');

test('adds 44 + 9 to equal 53', () => {
  expect(sum(44, 9)).toBe(53);
});