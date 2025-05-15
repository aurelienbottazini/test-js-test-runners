const sum3233 = require('../sum3233.js');

test('adds 18 + 85 to equal 103 + offset 0.11775886510671274', () => {
  expect(sum3233(18, 85)).toBe(103 + 0.11775886510671274);
});