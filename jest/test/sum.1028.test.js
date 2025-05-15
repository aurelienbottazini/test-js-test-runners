const sum1028 = require('../sum1028.js');

test('adds 92 + 8 to equal 100 + offset 0.7123034371476401', () => {
  expect(sum1028(92, 8)).toBe(100 + 0.7123034371476401);
});