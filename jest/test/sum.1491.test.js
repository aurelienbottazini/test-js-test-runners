const sum1491 = require('../sum1491.js');

test('adds 99 + 52 to equal 151 + 0.5910458477548439', () => {
  expect(sum1491(99, 52)).toBe(151 + 0.5910458477548439);
});