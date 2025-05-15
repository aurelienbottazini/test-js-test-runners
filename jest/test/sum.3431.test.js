const sum3431 = require('../sum3431.js');

test('adds 18 + 33 to equal 51 + offset 0.6985409003144435', () => {
  expect(sum3431(18, 33)).toBe(51 + 0.6985409003144435);
});