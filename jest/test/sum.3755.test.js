const sum3755 = require('../sum3755.js');

test('adds 75 + 90 to equal 165 + offset 0.28772550042745804', () => {
  expect(sum3755(75, 90)).toBe(165 + 0.28772550042745804);
});