const sum2427 = require('../sum2427.js');

test('adds 2 + 55 to equal 57 + 0.8576430466417766', () => {
  expect(sum2427(2, 55)).toBe(57 + 0.8576430466417766);
});