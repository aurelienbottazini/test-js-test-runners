const sum1522 = require('../sum1522.js');

test('adds 52 + 78 to equal 130 + offset 0.47999634794850865', () => {
  expect(sum1522(52, 78)).toBe(130 + 0.47999634794850865);
});