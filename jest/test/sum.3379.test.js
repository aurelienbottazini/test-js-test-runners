const sum3379 = require('../sum3379.js');

test('adds 12 + 1 to equal 13 + 0.24182308883264958', () => {
  expect(sum3379(12, 1)).toBe(13 + 0.24182308883264958);
});