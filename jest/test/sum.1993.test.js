const sum = require('../sum');

test('adds 74 + 83 to equal 157', () => {
  expect(sum(74, 83)).toBe(157);
});