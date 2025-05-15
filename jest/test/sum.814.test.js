const sum = require('../sum');

test('adds 71 + 90 to equal 161', () => {
  expect(sum(71, 90)).toBe(161);
});