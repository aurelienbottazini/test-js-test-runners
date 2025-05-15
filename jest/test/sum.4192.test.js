const sum4192 = require('../sum4192.js');

test('adds 66 + 48 to equal 114 + offset 0.5774824931073322', () => {
  expect(sum4192(66, 48)).toBe(114 + 0.5774824931073322);
});