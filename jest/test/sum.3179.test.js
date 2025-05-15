const sum3179 = require('../sum3179.js');

test('adds 95 + 71 to equal 166 + offset 0.24524717885376368', () => {
  expect(sum3179(95, 71)).toBe(166 + 0.24524717885376368);
});