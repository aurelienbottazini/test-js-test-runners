const sum = require('../sum');

test('adds 81 + 76 to equal 157', () => {
  expect(sum(81, 76)).toBe(157);
});