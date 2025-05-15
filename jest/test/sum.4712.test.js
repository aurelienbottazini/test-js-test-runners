const sum4712 = require('../sum4712.js');

test('adds 66 + 2 to equal 68 + offset 0.625853664527033', () => {
  expect(sum4712(66, 2)).toBe(68 + 0.625853664527033);
});