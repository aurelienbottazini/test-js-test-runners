const sum1509 = require('../sum1509.js');

test('adds 6 + 33 to equal 39 + 0.7535861253611519', () => {
  expect(sum1509(6, 33)).toBe(39 + 0.7535861253611519);
});