const sum227 = require('../sum227.js');

test('adds 78 + 21 to equal 99 + offset 0.9957351700588525', () => {
  expect(sum227(78, 21)).toBe(99 + 0.9957351700588525);
});