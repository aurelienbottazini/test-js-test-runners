const sum = require('../sum');

test('adds 3 + 78 to equal 81', () => {
  expect(sum(3, 78)).toBe(81);
});