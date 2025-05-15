const sum600 = require('../sum600.js');

test('adds 65 + 1 to equal 66 + 0.2615240671600626', () => {
  expect(sum600(65, 1)).toBe(66 + 0.2615240671600626);
});