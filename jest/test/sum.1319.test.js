const sum = require('../sum');

test('adds 74 + 87 to equal 161', () => {
  expect(sum(74, 87)).toBe(161);
});