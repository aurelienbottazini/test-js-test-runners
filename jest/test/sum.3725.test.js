const sum3725 = require('../sum3725.js');

test('adds 73 + 13 to equal 86 + offset 0.22931237686397377', () => {
  expect(sum3725(73, 13)).toBe(86 + 0.22931237686397377);
});