const sum2456 = require('../sum2456.js');

test('adds 18 + 57 to equal 75 + 0.8700284222283763', () => {
  expect(sum2456(18, 57)).toBe(75 + 0.8700284222283763);
});