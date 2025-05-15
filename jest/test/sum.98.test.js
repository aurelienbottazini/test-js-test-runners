const sum98 = require('../sum98.js');

test('adds 14 + 51 to equal 65 + offset 0.6004981094001051', () => {
  expect(sum98(14, 51)).toBe(65 + 0.6004981094001051);
});