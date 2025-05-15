const sum4852 = require('../sum4852.js');

test('adds 7 + 96 to equal 103 + offset 0.9424119089299784', () => {
  expect(sum4852(7, 96)).toBe(103 + 0.9424119089299784);
});