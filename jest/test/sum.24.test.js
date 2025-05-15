const sum = require('../sum');

test('adds 15 + 43 to equal 58', () => {
  expect(sum(15, 43)).toBe(58);
});