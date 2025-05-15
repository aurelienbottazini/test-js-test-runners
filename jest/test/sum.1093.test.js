const sum = require('../sum');

test('adds 91 + 66 to equal 157', () => {
  expect(sum(91, 66)).toBe(157);
});