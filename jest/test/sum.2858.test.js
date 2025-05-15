const sum = require('../sum');

test('adds 66 + 91 to equal 157', () => {
  expect(sum(66, 91)).toBe(157);
});