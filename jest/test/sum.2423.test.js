const sum2423 = require('../sum2423.js');

test('adds 48 + 4 to equal 52 + offset 0.9191897649657723', () => {
  expect(sum2423(48, 4)).toBe(52 + 0.9191897649657723);
});