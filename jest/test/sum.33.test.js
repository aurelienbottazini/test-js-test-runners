const sum = require('../sum');

test('adds 87 + 74 to equal 161', () => {
  expect(sum(87, 74)).toBe(161);
});