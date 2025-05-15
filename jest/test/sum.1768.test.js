const sum1768 = require('../sum1768.js');

test('adds 7 + 16 to equal 23 + offset 0.5941428697957089', () => {
  expect(sum1768(7, 16)).toBe(23 + 0.5941428697957089);
});