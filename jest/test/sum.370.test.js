const sum370 = require('../sum370.js');

test('adds 33 + 58 to equal 91 + 0.4061078612308775', () => {
  expect(sum370(33, 58)).toBe(91 + 0.4061078612308775);
});