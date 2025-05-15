const sum1015 = require('../sum1015.js');

test('adds 0 + 28 to equal 28 + offset 0.3794807389381899', () => {
  expect(sum1015(0, 28)).toBe(28 + 0.3794807389381899);
});