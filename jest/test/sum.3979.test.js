const sum3979 = require('../sum3979.js');

test('adds 80 + 6 to equal 86 + offset 0.9424357636430359', () => {
  expect(sum3979(80, 6)).toBe(86 + 0.9424357636430359);
});