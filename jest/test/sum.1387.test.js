const sum1387 = require('../sum1387.js');

test('adds 26 + 0 to equal 26 + offset 0.47773805244878687', () => {
  expect(sum1387(26, 0)).toBe(26 + 0.47773805244878687);
});