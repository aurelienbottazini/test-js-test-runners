const sum = require('../sum');

test('adds 31 + 74 to equal 105', () => {
  expect(sum(31, 74)).toBe(105);
});