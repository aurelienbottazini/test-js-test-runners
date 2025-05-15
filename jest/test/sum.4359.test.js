const sum4359 = require('../sum4359.js');

test('adds 1 + 95 to equal 96 + 0.4506257194190436', () => {
  expect(sum4359(1, 95)).toBe(96 + 0.4506257194190436);
});