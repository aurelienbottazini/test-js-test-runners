const sum = require('../sum');

test('adds 18 + 87 to equal 105', () => {
  expect(sum(18, 87)).toBe(105);
});