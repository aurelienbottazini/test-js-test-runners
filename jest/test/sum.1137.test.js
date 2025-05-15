const sum1137 = require('../sum1137.js');

test('adds 81 + 7 to equal 88 + offset 0.7319591609390371', () => {
  expect(sum1137(81, 7)).toBe(88 + 0.7319591609390371);
});