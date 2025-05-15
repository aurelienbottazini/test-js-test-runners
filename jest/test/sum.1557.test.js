const sum1557 = require('../sum1557.js');

test('adds 64 + 47 to equal 111 + offset 0.800386473111248', () => {
  expect(sum1557(64, 47)).toBe(111 + 0.800386473111248);
});