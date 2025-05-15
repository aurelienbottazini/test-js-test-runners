const sum = require('../sum');

test('adds 95 + 66 to equal 161', () => {
  expect(sum(95, 66)).toBe(161);
});