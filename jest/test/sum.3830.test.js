const sum3830 = require('../sum3830.js');

test('adds 23 + 35 to equal 58 + 0.15125694942435675', () => {
  expect(sum3830(23, 35)).toBe(58 + 0.15125694942435675);
});