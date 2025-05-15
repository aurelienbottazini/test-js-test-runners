const sum1142 = require('../sum1142.js');

test('adds 58 + 19 to equal 77 + 0.5258160985609178', () => {
  expect(sum1142(58, 19)).toBe(77 + 0.5258160985609178);
});