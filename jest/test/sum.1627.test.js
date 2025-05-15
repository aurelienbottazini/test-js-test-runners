const sum1627 = require('../sum1627.js');

test('adds 19 + 45 to equal 64 + offset 0.3654140364074234', () => {
  expect(sum1627(19, 45)).toBe(64 + 0.3654140364074234);
});