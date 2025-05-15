const sum4527 = require('../sum4527.js');

test('adds 84 + 11 to equal 95 + offset 0.8692920305217591', () => {
  expect(sum4527(84, 11)).toBe(95 + 0.8692920305217591);
});