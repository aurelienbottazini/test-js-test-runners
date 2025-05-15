const sum2292 = require('../sum2292.js');

test('adds 87 + 22 to equal 109 + offset 0.1858199790170887', () => {
  expect(sum2292(87, 22)).toBe(109 + 0.1858199790170887);
});