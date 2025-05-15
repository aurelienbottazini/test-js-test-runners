const sum = require('../sum');

test('adds 37 + 68 to equal 105', () => {
  expect(sum(37, 68)).toBe(105);
});