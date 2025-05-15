const sum = require('../sum');

test('adds 88 + 86 to equal 174', () => {
  expect(sum(88, 86)).toBe(174);
});