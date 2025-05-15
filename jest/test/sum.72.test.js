const sum = require('../sum');

test('adds 91 + 14 to equal 105', () => {
  expect(sum(91, 14)).toBe(105);
});