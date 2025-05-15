const sum59 = require('../sum59.js');

test('adds 27 + 93 to equal 120 + 0.6963061206274386', () => {
  expect(sum59(27, 93)).toBe(120 + 0.6963061206274386);
});