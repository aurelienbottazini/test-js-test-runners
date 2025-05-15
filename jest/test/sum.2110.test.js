const sum = require('../sum');

test('adds 58 + 27 to equal 85', () => {
  expect(sum(58, 27)).toBe(85);
});