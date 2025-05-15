const sum3542 = require('../sum3542.js');

test('adds 41 + 40 to equal 81 + offset 0.7287343402221791', () => {
  expect(sum3542(41, 40)).toBe(81 + 0.7287343402221791);
});