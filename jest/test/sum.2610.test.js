const sum = require('../sum');

test('adds 78 + 3 to equal 81', () => {
  expect(sum(78, 3)).toBe(81);
});