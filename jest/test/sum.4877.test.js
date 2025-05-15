const sum = require('../sum');

test('adds 79 + 78 to equal 157', () => {
  expect(sum(79, 78)).toBe(157);
});