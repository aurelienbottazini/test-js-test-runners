const sum1315 = require('../sum1315.js');

test('adds 71 + 75 to equal 146 + offset 0.5695260646781763', () => {
  expect(sum1315(71, 75)).toBe(146 + 0.5695260646781763);
});