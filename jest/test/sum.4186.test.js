const sum = require('../sum');

test('adds 67 + 94 to equal 161', () => {
  expect(sum(67, 94)).toBe(161);
});