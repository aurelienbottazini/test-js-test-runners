const sum2163 = require('../sum2163.js');

test('adds 48 + 43 to equal 91 + 0.7708293006317952', () => {
  expect(sum2163(48, 43)).toBe(91 + 0.7708293006317952);
});