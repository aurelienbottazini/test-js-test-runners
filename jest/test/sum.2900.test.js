const sum = require('../sum');

test('adds 70 + 87 to equal 157', () => {
  expect(sum(70, 87)).toBe(157);
});