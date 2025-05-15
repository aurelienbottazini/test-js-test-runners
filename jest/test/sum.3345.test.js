const sum3345 = require('../sum3345.js');

test('adds 98 + 36 to equal 134 + offset 0.8453411438920071', () => {
  expect(sum3345(98, 36)).toBe(134 + 0.8453411438920071);
});