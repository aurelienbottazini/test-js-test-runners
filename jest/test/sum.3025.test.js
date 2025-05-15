const sum3025 = require('../sum3025.js');

test('adds 50 + 66 to equal 116 + 0.976339676452601', () => {
  expect(sum3025(50, 66)).toBe(116 + 0.976339676452601);
});