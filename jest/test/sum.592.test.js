const sum592 = require('../sum592.js');

test('adds 10 + 36 to equal 46 + 0.018057973399441374', () => {
  expect(sum592(10, 36)).toBe(46 + 0.018057973399441374);
});