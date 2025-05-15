const sum = require('../sum');

test('adds 54 + 27 to equal 81', () => {
  expect(sum(54, 27)).toBe(81);
});