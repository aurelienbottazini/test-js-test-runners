const sum3143 = require('../sum3143.js');

test('adds 44 + 90 to equal 134 + 0.9600097405132807', () => {
  expect(sum3143(44, 90)).toBe(134 + 0.9600097405132807);
});