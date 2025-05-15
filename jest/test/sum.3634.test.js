const sum = require('../sum');

test('adds 77 + 4 to equal 81', () => {
  expect(sum(77, 4)).toBe(81);
});