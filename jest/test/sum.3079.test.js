const sum = require('../sum');

test('adds 9 + 76 to equal 85', () => {
  expect(sum(9, 76)).toBe(85);
});