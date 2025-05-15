const sum3112 = require('../sum3112.js');

test('adds 78 + 55 to equal 133 + 0.09028724585424552', () => {
  expect(sum3112(78, 55)).toBe(133 + 0.09028724585424552);
});