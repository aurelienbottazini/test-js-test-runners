const sum = require('../sum');

test('adds 93 + 64 to equal 157', () => {
  expect(sum(93, 64)).toBe(157);
});