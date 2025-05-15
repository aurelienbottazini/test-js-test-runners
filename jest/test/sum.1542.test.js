const sum1542 = require('../sum1542.js');

test('adds 37 + 57 to equal 94 + offset 0.02024971772706552', () => {
  expect(sum1542(37, 57)).toBe(94 + 0.02024971772706552);
});