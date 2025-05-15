const sum3900 = require('../sum3900.js');

test('adds 74 + 50 to equal 124 + 0.6708157756664475', () => {
  expect(sum3900(74, 50)).toBe(124 + 0.6708157756664475);
});