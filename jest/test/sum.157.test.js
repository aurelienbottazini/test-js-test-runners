const sum157 = require('../sum157.js');

test('adds 89 + 99 to equal 188 + offset 0.1105119024800274', () => {
  expect(sum157(89, 99)).toBe(188 + 0.1105119024800274);
});