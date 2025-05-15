const sum = require('../sum');

test('adds 98 + 83 to equal 181', () => {
  expect(sum(98, 83)).toBe(181);
});