const sum = require('../sum');

test('adds 27 + 78 to equal 105', () => {
  expect(sum(27, 78)).toBe(105);
});