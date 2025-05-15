const sum3592 = require('../sum3592.js');

test('adds 78 + 92 to equal 170 + 0.02602233110201224', () => {
  expect(sum3592(78, 92)).toBe(170 + 0.02602233110201224);
});