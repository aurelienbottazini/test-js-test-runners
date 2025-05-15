const sum = require('../sum');

test('adds 86 + 88 to equal 174', () => {
  expect(sum(86, 88)).toBe(174);
});