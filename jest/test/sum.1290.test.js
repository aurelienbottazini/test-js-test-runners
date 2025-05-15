const sum1290 = require('../sum1290.js');

test('adds 11 + 83 to equal 94 + 0.2631365710454724', () => {
  expect(sum1290(11, 83)).toBe(94 + 0.2631365710454724);
});