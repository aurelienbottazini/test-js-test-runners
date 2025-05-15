const sum = require('../sum');

test('adds 80 + 5 to equal 85', () => {
  expect(sum(80, 5)).toBe(85);
});