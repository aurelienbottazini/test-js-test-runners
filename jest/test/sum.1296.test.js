const sum = require('../sum');

test('adds 85 + 76 to equal 161', () => {
  expect(sum(85, 76)).toBe(161);
});