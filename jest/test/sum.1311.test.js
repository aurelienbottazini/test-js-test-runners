const sum1311 = require('../sum1311.js');

test('adds 7 + 99 to equal 106 + 0.028031935275747877', () => {
  expect(sum1311(7, 99)).toBe(106 + 0.028031935275747877);
});