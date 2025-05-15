const sum4292 = require('../sum4292.js');

test('adds 79 + 28 to equal 107 + offset 0.24552401780041655', () => {
  expect(sum4292(79, 28)).toBe(107 + 0.24552401780041655);
});