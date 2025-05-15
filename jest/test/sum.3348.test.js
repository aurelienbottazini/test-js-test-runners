const sum3348 = require('../sum3348.js');

test('adds 60 + 92 to equal 152 + offset 0.18685261604162595', () => {
  expect(sum3348(60, 92)).toBe(152 + 0.18685261604162595);
});