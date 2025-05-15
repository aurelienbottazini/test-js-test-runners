const sum = require('../sum');

test('adds 30 + 55 to equal 85', () => {
  expect(sum(30, 55)).toBe(85);
});