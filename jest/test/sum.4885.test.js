const sum = require('../sum');

test('adds 16 + 69 to equal 85', () => {
  expect(sum(16, 69)).toBe(85);
});