const sum = require('../sum');

test('adds 54 + 35 to equal 89', () => {
  expect(sum(54, 35)).toBe(89);
});