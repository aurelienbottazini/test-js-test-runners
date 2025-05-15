const sum = require('../sum');

test('adds 84 + 77 to equal 161', () => {
  expect(sum(84, 77)).toBe(161);
});