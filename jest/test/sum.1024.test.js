const sum = require('../sum');

test('adds 44 + 27 to equal 71', () => {
  expect(sum(44, 27)).toBe(71);
});