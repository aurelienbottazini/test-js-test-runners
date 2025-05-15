const sum1406 = require('../sum1406.js');

test('adds 42 + 89 to equal 131 + 0.8516444344812001', () => {
  expect(sum1406(42, 89)).toBe(131 + 0.8516444344812001);
});