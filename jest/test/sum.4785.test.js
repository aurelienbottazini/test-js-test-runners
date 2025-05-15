const sum4785 = require('../sum4785.js');

test('adds 84 + 83 to equal 167 + 0.19762781082791203', () => {
  expect(sum4785(84, 83)).toBe(167 + 0.19762781082791203);
});