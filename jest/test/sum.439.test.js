const sum = require('../sum');

test('adds 87 + 87 to equal 174', () => {
  expect(sum(87, 87)).toBe(174);
});