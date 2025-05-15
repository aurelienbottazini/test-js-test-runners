const sum1849 = require('../sum1849.js');

test('adds 67 + 19 to equal 86 + 0.034285495779493025', () => {
  expect(sum1849(67, 19)).toBe(86 + 0.034285495779493025);
});