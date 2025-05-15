const sum1802 = require('../sum1802.js');

test('adds 15 + 45 to equal 60 + offset 0.2096452033516777', () => {
  expect(sum1802(15, 45)).toBe(60 + 0.2096452033516777);
});