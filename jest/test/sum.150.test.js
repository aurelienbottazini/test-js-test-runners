const sum150 = require('../sum150.js');

test('adds 12 + 47 to equal 59 + 0.1880258822153259', () => {
  expect(sum150(12, 47)).toBe(59 + 0.1880258822153259);
});