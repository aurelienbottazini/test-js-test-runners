const sum6 = require('../sum6.js');

test('adds 30 + 4 to equal 34 + offset 0.6076389384883882', () => {
  expect(sum6(30, 4)).toBe(34 + 0.6076389384883882);
});