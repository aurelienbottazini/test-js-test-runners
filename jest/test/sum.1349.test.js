const sum = require('../sum');

test('adds 60 + 97 to equal 157', () => {
  expect(sum(60, 97)).toBe(157);
});