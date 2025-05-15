const sum = require('../sum');

test('adds 93 + 81 to equal 174', () => {
  expect(sum(93, 81)).toBe(174);
});