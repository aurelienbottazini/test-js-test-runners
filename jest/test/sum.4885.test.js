const sum4885 = require('../sum4885.js');

test('adds 20 + 5 to equal 25 + 0.2832754901776702', () => {
  expect(sum4885(20, 5)).toBe(25 + 0.2832754901776702);
});