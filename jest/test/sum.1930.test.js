const sum = require('../sum');

test('adds 98 + 23 to equal 121', () => {
  expect(sum(98, 23)).toBe(121);
});