const sum2377 = require('../sum2377.js');

test('adds 41 + 2 to equal 43 + offset 0.23175076588621424', () => {
  expect(sum2377(41, 2)).toBe(43 + 0.23175076588621424);
});