const sum3595 = require('../sum3595.js');

test('adds 21 + 97 to equal 118 + 0.6791545616008084', () => {
  expect(sum3595(21, 97)).toBe(118 + 0.6791545616008084);
});