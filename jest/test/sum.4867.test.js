const sum = require('../sum');

test('adds 3 + 68 to equal 71', () => {
  expect(sum(3, 68)).toBe(71);
});