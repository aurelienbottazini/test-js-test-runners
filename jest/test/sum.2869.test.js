const sum = require('../sum');

test('adds 98 + 87 to equal 185', () => {
  expect(sum(98, 87)).toBe(185);
});