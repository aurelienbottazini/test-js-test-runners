const sum4170 = require('../sum4170.js');

test('adds 76 + 59 to equal 135 + 0.028621593271243584', () => {
  expect(sum4170(76, 59)).toBe(135 + 0.028621593271243584);
});