const sum4558 = require('../sum4558.js');

test('adds 51 + 32 to equal 83 + offset 0.5250629590775509', () => {
  expect(sum4558(51, 32)).toBe(83 + 0.5250629590775509);
});