const sum4614 = require('../sum4614.js');

test('adds 46 + 90 to equal 136 + 0.1127962481242819', () => {
  expect(sum4614(46, 90)).toBe(136 + 0.1127962481242819);
});