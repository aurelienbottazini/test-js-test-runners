const sum2857 = require('../sum2857.js');

test('adds 56 + 55 to equal 111 + 0.7533322420938513', () => {
  expect(sum2857(56, 55)).toBe(111 + 0.7533322420938513);
});