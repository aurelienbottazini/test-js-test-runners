const sum1234 = require('../sum1234.js');

test('adds 20 + 48 to equal 68 + 0.8731083348991152', () => {
  expect(sum1234(20, 48)).toBe(68 + 0.8731083348991152);
});