const sum3975 = require('../sum3975.js');

test('adds 54 + 52 to equal 106 + offset 0.778894401012318', () => {
  expect(sum3975(54, 52)).toBe(106 + 0.778894401012318);
});