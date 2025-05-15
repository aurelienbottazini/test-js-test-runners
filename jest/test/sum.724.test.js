const sum = require('../sum');

test('adds 88 + 17 to equal 105', () => {
  expect(sum(88, 17)).toBe(105);
});