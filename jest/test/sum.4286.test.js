const sum = require('../sum');

test('adds 82 + 75 to equal 157', () => {
  expect(sum(82, 75)).toBe(157);
});