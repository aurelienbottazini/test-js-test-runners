const sum1927 = require('../sum1927.js');

test('adds 20 + 11 to equal 31 + 0.5244916301018464', () => {
  expect(sum1927(20, 11)).toBe(31 + 0.5244916301018464);
});